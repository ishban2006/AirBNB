const express = require("express");
const router = express.Router({ mergeParams : true});   //To pass params of parent like id from app to router
const Listing = require("../models/listings");
const Review = require("../models/review");
const wrapAsync = require("../utility/wrapAsync");
const {validateReview} = require("../middleware");

//Add a Review
router.post(
    "/",
    validateReview,
    wrapAsync(async (req, res) => {
        let {id} = req.params;
        let listing = await Listing.findById(id);
        let newReview = new Review(req.body.review);
        listing.reviews.push(newReview);
        await newReview.save();
        await listing.save();
        console.log("Review Added Successfully");
        res.redirect(`/listings/${id}`);
    })
);

//Delete a Review
router.delete(
    "/:reviewId", 
    wrapAsync(async (req, res) => {
        let {id, reviewId} = req.params;
        await Listing.findByIdAndUpdate(id, {$pull : {reviews : reviewId}}); 
        const del = await Review.findByIdAndDelete(reviewId);
        res.redirect(`/listings/${id}`);
        console.log(`Review (${del.title}) Deleted Successfully`);
    })
);

module.exports = router;