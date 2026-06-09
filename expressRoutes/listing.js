const express = require("express");
const router = express.Router();
const wrapAsync = require("../utility/wrapAsync");
const { validateListing, isLoggedIN, isOwner } = require("../config/middleware");

const listingController = require("../controllers/listings");

//To search listings based on country
router.get(
    "/search",
    wrapAsync(listingController.search)
);

// Index Page & Create New Listing
router
    .route("/")
        .get(
            wrapAsync(listingController.index)
    );

// Show Form & Save New Listing
router
    .route("/createNew")
        .get(                                               //Show Form
            isLoggedIN,
            wrapAsync(listingController.newListing)
        )
        .post(                                              //Save New Listing
            isLoggedIN,
            validateListing,
            wrapAsync(listingController.saveNewListing)
    );

// Show Listing
router
    .route("/:id")
        .get(
            wrapAsync(listingController.show)           //Show Info
        )
        .put(                                           //Save Edited Info
            isLoggedIN,
            isOwner,
            validateListing,
            wrapAsync(listingController.saveEditInfo)
        )
        .delete(                                        //Delete Listing
            isLoggedIN,
            isOwner,
            wrapAsync(listingController.delete)
    );

// Edit Form
router
    .route("/:id/edit")
        .get(                                           //Show Edit Form
            isLoggedIN,
            isOwner,
            wrapAsync(listingController.edit)
    );

module.exports = router;