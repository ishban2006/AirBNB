const Listing = require("../models/listings");
const {cloudinary} = require("../cloudConfig");

//Index Page to view all listings
module.exports.index = async (req, res) => {      
    const allListings = await Listing.find({});
    res.render("../views/listing/index", { allListings });
    console.log("Rendered Listings Page");
}

//View your listings
module.exports.yourListing = async (req, res) => {     
    let user = req.user._id;
    const allListings = await Listing.find({ owner : user });

    if (allListings.length === 0) {
        req.flash("error", "You don't own any listing");
        return res.redirect("/listings");
    }

    res.render("../views/listing/index", { allListings });
    console.log("Rendered Listings of user");
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
    newElem.image = {
    url: req.file.path,
    filename: req.file.filename
    };
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

    let listing = await Listing.findById(id);

    if (req.file) {                                         
        if (
            listing.image.filename &&                               //If image is chnaged and old image was uploaded then it should be deleted from cloudinary
            listing.image.filename !== "listingimage"
        ) {
            await cloudinary.uploader.destroy(
                listing.image.filename
            );
        }

        req.body.listing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
    }
    await Listing.findByIdAndUpdate(id, req.body.listing);   //Deconstruct object into individual values
    req.flash("success", "Information Edited Successfully!!");
    res.redirect(`/listings/${id}`);
}

//Delete Listing
module.exports.delete = async (req, res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);

    if (                                    //If an image was uploaded for listing then it should be deleted from cloudinary
        listing.image?.filename &&
        listing.image.filename !== "listingimage"
    ) {
        await cloudinary.uploader.destroy(
            listing.image.filename
        );
    }

    await Listing.findByIdAndDelete(id); 

    req.flash("success", "Listing Deleted Successfully!!"); 
    res.redirect("/listings");
}

//Search listing based on country, location, title or price
module.exports.search = async (req, res) => {
    const searchText = req.query.searchText?.trim();

    if (!searchText) {
        req.flash("error", "Please enter something to search");
        return res.redirect("/listings");
    }

    let allListings;

    if (!isNaN(searchText)) {
        allListings = await Listing.find({
            price: { $lte: Number(searchText) }
        });
    } else {
        allListings = await Listing.find({
            $or: [
                { country: { $regex: searchText, $options: "i" } },
                { location: { $regex: searchText, $options: "i" } },
                { title: { $regex: searchText, $options: "i" } }
            ]
        });
    }

    if (allListings.length === 0) {
        req.flash("error", "No matching listings found");
        return res.redirect("/listings");
    }

    res.render("listing/index", { allListings });
};