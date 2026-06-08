const { listingSchema, reviewSchema } = require("./schema");
const expressError = require("./utility/expressError");
const passport = require("passport");
const localStrategy = require("passport-local");

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
        req.session.redirectURL = req.originalUrl;
        req.flash("error", "You must be logged in");
        return res.redirect("/login");
    }
    return next();
}