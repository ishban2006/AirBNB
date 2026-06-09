const express = require("express");
const router = express.Router();
const wrapAsync = require("../utility/wrapAsync");
const {validateListing, isLoggedIN, isOwner} = require("../config/middleware");
const passport = require("passport");
const localStrategy = require("passport-local");

const listingController = require("../controllers/listings");

//Index Page to view all listings
router.get(
    "/", 
    wrapAsync(listingController.index)
);

//Show form to add new listing
router.get(
    "/createNew",
    isLoggedIN, 
    wrapAsync(listingController.newListing)
);

//Save the new listing in database
router.post(
    "/createNew", 
    isLoggedIN,
    validateListing,
    wrapAsync(listingController.saveNewListing)
); 

//Show Complete Info Route
router.get(
    "/:id", 
    wrapAsync(listingController.show)
);

//Edit Info
router.get(
    "/:id/edit", 
    isLoggedIN,
    isOwner,
    wrapAsync(listingController.edit)
);

//Save Edit Info
router.put(
    "/:id", 
    isLoggedIN,
    isOwner,
    validateListing,
    wrapAsync(listingController.saveEditInfo)
);

//Delete a Listing
router.delete(
    "/:id", 
    isLoggedIN,
    isOwner,
    wrapAsync(listingController.delete)
);

module.exports = router;