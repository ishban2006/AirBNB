const Listing = require("../models/listings");
const Review = require("../models/review");

// Add Review
module.exports.createReview = async (req, res) => {
    let { id } = req.params;

    let listing = await Listing.findById(id);

    let newReview = new Review(req.body.review);
    newReview.owner = req.user._id;

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    req.flash("success", "Review Added Successfully!!");
    res.redirect(`/listings/${id}`);
};

// Delete Review
module.exports.deleteReview = async (req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, {
        $pull: { reviews: reviewId }
    });

    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted Successfully!!");
    res.redirect(`/listings/${id}`);
};