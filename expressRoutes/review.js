const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utility/wrapAsync");
const { validateReview, isLoggedIN, isReviewOwner, hasReviewed, notOwner } = require("../config/middleware");

const reviewController = require("../controllers/reviews");

// Add Review
router.post(
    "/",
    isLoggedIN,
    notOwner,
    hasReviewed,
    validateReview,
    wrapAsync(reviewController.createReview)
);

// Delete Review
router.delete(
    "/:reviewId",
    isLoggedIN,
    isReviewOwner,
    wrapAsync(reviewController.deleteReview)
);

module.exports = router;