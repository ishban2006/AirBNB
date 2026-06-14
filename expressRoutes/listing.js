const express = require("express");
const router = express.Router();
const wrapAsync = require("../utility/wrapAsync");
const {cloudinary} = require("../cloudConfig");
const {storage} = require("../cloudConfig");
const multer  = require('multer');
const upload = multer({ 
    storage,
    limits: {
        fileSize: 2 * 1024 * 1024 // 2 MB
    }
});    //Initialize multer
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

//To view your own listings
router.get(
    "/your-listings",
    isLoggedIN,
    wrapAsync(listingController.yourListing)
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
            upload.single('listing[image]'),
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
            upload.single('listing[image]'),
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