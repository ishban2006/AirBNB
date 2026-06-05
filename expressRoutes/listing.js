const express = require("express");
const router = express.Router();
const Listing = require("../models/listings");
const wrapAsync = require("../utility/wrapAsync");
const {validateListing} = require("../middleware");

//Index Page to view all listings
router.get(
    "/", 
    wrapAsync(async (req, res) => {      
        const allListings = await Listing.find({});
        res.render("../views/listing/index", { allListings });
        console.log("Rendered Listings Page");
    })
);

//Show form to add new listing
router.get(
    "/createNew", 
    wrapAsync(async (req, res) => {
        res.render("../views/listing/createNew");
        console.log("Rendered Create Listing Form");
    })
);

//Save the new listing in database
router.post(
    "/createNew", 
    validateListing,
    wrapAsync(async (req, res, next) => {
        const newElem = new Listing (req.body.listing);
        await newElem.save();
        res.redirect("/listings");
        console.log("New Listing Added Successfully");
    })
); 

//Show Complete Info Route
router.get(
    "/:id", 
    wrapAsync(async (req, res) => {             
        let {id} = req.params;         //id is created by mongodb
        const compData = await Listing.findById(id).populate("reviews");
        res.render("../views/listing/showInfo", { compData });
        console.log("Rendered Listing Details Page");
    })
);

//Edit Info
router.get(
    "/:id/edit", 
    wrapAsync(async (req, res) => {     //Handling database errors
        let {id} = req.params;         
        const compData = await Listing.findById(id);
        res.render("../views/listing/editInfo", { compData });
        console.log("Rendered Edit Listing Form");
    })
);

//Save Edit Info
router.put(
    "/:id", 
    validateListing,
    wrapAsync(async (req, res) => {
        let {id} = req.params;
        await Listing.findByIdAndUpdate(id, { ...req.body.listing });   //Deconstruct object into individual values
        res.redirect(`/listings/${id}`);
        console.log("Listing Updated Successfully");
    })
);

//Delete a Listing
router.delete(
    "/:id", 
    wrapAsync(async (req, res) => {
        let {id} = req.params;
        const deleted = await Listing.findByIdAndDelete(id);  
        res.redirect("/listings");
        console.log(`Listing (${deleted.title}) Deleted Successfully`);
    })
);

module.exports = router;