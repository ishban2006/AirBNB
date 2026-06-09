const Listing = require("../models/listings");

//Index Page to view all listings
module.exports.index = async (req, res) => {      
    const allListings = await Listing.find({});
    res.render("../views/listing/index", { allListings });
    console.log("Rendered Listings Page");
}

//Show form to add new listing
module.exports.newListing = async (req, res) => {
    res.render("../views/listing/createNew");
    console.log("Rendered Create Listing Form");
}

//Save the new listing in database
module.exports.saveNewListing = async (req, res) => {
    const newElem = new Listing (req.body.listing);
    newElem.owner = req.user._id;
    await newElem.save();
    req.flash("success", "New Listing Created Successfully!!");
    res.redirect("/listings");
}

//Show Complete Info Route
module.exports.show = async (req, res) => {             
    let {id} = req.params;         //id is created by mongodb
    const compData = await Listing.findById(id).
        populate({
            path: "reviews",
            populate: {
                path: "owner"
            }
        }).
        populate("owner");
    if (!compData) {
        req.flash("error", "Listing Does not exist");
        return res.redirect("/listings");
    }
    let hasReviewed = false;
    if (req.user) {
        hasReviewed = compData.reviews.some(review => {
            return review.owner._id.equals(req.user._id);
        });
    }
    res.render("../views/listing/showInfo", { compData, hasReviewed });
    console.log("Rendered Listing Details Page");
}

//Edit Info
module.exports.edit = async (req, res) => {     
    let {id} = req.params;         
    const compData = await Listing.findById(id);
    if (!compData) {
        req.flash("error", "Listing Does not exist");
        return res.redirect("/listings");
    }
    res.render("../views/listing/editInfo", { compData });
    console.log("Rendered Edit Listing Form");
}

//Save Edit Info
module.exports.saveEditInfo = async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });   //Deconstruct object into individual values
    req.flash("success", "Information Edited Successfully!!");
    res.redirect(`/listings/${id}`);
}

module.exports.delete = async (req, res) => {
    let {id} = req.params;
    const deleted = await Listing.findByIdAndDelete(id); 
    req.flash("success", "Listing Deleted Successfully!!"); 
    res.redirect("/listings");
}