const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utility/wrapAsync");
const { validateReview, isLoggedIN, isReviewOwner, hasReviewed, notOwner } = require("../config/middleware");

const reviewController = require("../controllers/reviews");

// Add Review
router.
    route("/").
        post(
            isLoggedIN,
            notOwner,
            hasReviewed,
            validateReview,
            wrapAsync(reviewController.createReview)
    );

// Delete Review
router.
    route("/:reviewId").
        delete(
            isLoggedIN,
            isReviewOwner,
            wrapAsync(reviewController.deleteReview)
    );

module.exports = router;