const express = require("express");
const router = express.Router({ mergeParams : true});   //To pass params of parent like id from app to router
const Listing = require("../models/listings");
const Review = require("../models/review");
const wrapAsync = require("../utility/wrapAsync");
const {validateReview, isLoggedIN} = require("../middleware");

//Add a Review
router.post(
    "/",
    isLoggedIN,
    validateReview,
    wrapAsync(async (req, res) => {
        let {id} = req.params;
        let listing = await Listing.findById(id);
        let newReview = new Review(req.body.review);
        listing.reviews.push(newReview);
        await newReview.save();
        await listing.save();
        req.flash("success", "Review Added Successfully!!");
        res.redirect(`/listings/${id}`);
    })
);

//Delete a Review
router.delete(
    "/:reviewId", 
    isLoggedIN,
    wrapAsync(async (req, res) => {
        let {id, reviewId} = req.params;
        await Listing.findByIdAndUpdate(id, {$pull : {reviews : reviewId}}); 
        const del = await Review.findByIdAndDelete(reviewId);
        req.flash("success", "Review Deleted Successfully!!");
        res.redirect(`/listings/${id}`);
    })
);

module.exports = router;