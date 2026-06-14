const Review = require("../models/review");
const Listing = require("../models/listings");
const { listingSchema, reviewSchema } = require("../schema");
const expressError = require("../utility/expressError");
const passport = require("passport");
const localStrategy = require("passport-local");
const multer = require("multer");

// Joi Validation Middleware For Listing
module.exports.validateListing = (req, res, next) => {
    let result = listingSchema.validate(req.body);
    let error = result.error;

    if (error) {
        let errorMsg = error.details
            .map((el) => el.message)
            .join(",");

        throw new expressError(400, errorMsg);
    }
    next();
};

// Joi Validation Middleware For Review
module.exports.validateReview = (req, res, next) => {
    let result = reviewSchema.validate(req.body);
    let error = result.error;

    if (error) {
        let errorMsg = error.details
            .map((el) => el.message)
            .join(",");

        throw new expressError(400, errorMsg);
    }
    next();
};

// 404 Middleware
module.exports.notFound = (req, res, next) => {
    console.log("Incorrect page requested");
    next(new expressError(404, "Page Not Found"));
};

//Displaying Errors
module.exports.dispError = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    let {statusCode = 500, message = "Something Went Wrong"} = err;
    console.log("Error handled:", message);
    res.status(statusCode).render("error.ejs", {err});
}

//Show successful addition of a listing
module.exports.flashSuccess = (req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
}

//To authenticate a user
module.exports.isLoggedIN = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectURL = req.originalUrl;      //Redirect to page which user was looking into
        req.flash("error", "You must be logged in");
        return res.redirect("/login");
    }
    return next();
}

//Save last owner path
module.exports.saveURL = (req, res, next) => {
    res.locals.redirURL = req.session.redirectURL;
    return next();
}

//Authorize User for edit and delete listing
module.exports.isOwner = async (req, res, next) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if (!listing.owner.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

//Authorize User to delete a review
module.exports.isReviewOwner = async (req, res, next) => {
    let {id, reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if (!review.owner.equals(req.user._id)) {
        req.flash("error", "You are not the owner of this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

//To check if a user has already reviewed a listing or not
module.exports.hasReviewed = async(req, res, next) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    const existingReview = await Review.findOne({
        owner: req.user._id,
        _id: { $in: listing.reviews }
    });
    if (existingReview) {
        req.flash("error", "You have already reviewed this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

//To ensure that owner can't review his/her own listing
module.exports.notOwner = async (req, res, next) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if (listing.owner.equals(req.user._id)) {
        req.flash("error", "You can't review your own listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

//To ensure file size is <= 2 MB
module.exports.checkSize = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
            req.flash("error", "Image size must be less than 2 MB");
            return res.redirect(req.get("Referrer") || "/listings");
        }
    }
    next(err);
}