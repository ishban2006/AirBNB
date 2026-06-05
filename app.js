const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/wander";
const Listing = require("./models/listings");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utility/wrapAsync");
const {validateListing, validateReview} = require("./middleware");
const {notFound, dispError} = require("./middleware");
const Review = require("./models/review");
 
main() 
    .then(() => {
        console.log("Connected to DataBase");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(mongoURL);       //Connecting to Database
}

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended : true}));     //To parse data of an id
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

//Root Page
app.get("/", (req, res) => {
    res.send("Welcome to Home page");
    console.log("Root Page Displayed");
});

//Index Page to view all listings
app.get(
    "/listings", 
    wrapAsync(async (req, res) => {      
        const allListings = await Listing.find({});
        res.render("../views/listing/index", { allListings });
        console.log("Rendered Listings Page");
    })
);

//Show form to add new listing
app.get(
    "/listings/createNew", 
    wrapAsync(async (req, res) => {
        res.render("../views/listing/createNew");
        console.log("Rendered Create Listing Form");
    })
);

//Save the new listing in database
app.post(
    "/listings/createNew", 
    validateListing,
    wrapAsync(async (req, res, next) => {
        const newElem = new Listing (req.body.listing);
        await newElem.save();
        res.redirect("/listings");
        console.log("New Listing Added Successfully");
    })
); 

//Show Complete Info Route
app.get(
    "/listings/:id", 
    wrapAsync(async (req, res) => {             
        let {id} = req.params;         //id is created by mongodb
        const compData = await Listing.findById(id).populate("reviews");
        res.render("../views/listing/showInfo", { compData });
        console.log("Rendered Listing Details Page");
    })
);

//Edit Info
app.get(
    "/listings/:id/edit", 
    wrapAsync(async (req, res) => {     //Handling database errors
        let {id} = req.params;         
        const compData = await Listing.findById(id);
        res.render("../views/listing/editInfo", { compData });
        console.log("Rendered Edit Listing Form");
    })
);

//Save Edit Info
app.put(
    "/listings/:id", 
    validateListing,
    wrapAsync(async (req, res) => {
        let {id} = req.params;
        await Listing.findByIdAndUpdate(id, { ...req.body.listing });   //Deconstruct object into individual values
        res.redirect(`/listings/${id}`);
        console.log("Listing Updated Successfully");
    })
);

//Delete a Listing
app.delete(
    "/listings/:id", 
    wrapAsync(async (req, res) => {
        let {id} = req.params;
        const deleted = await Listing.findByIdAndDelete(id);  
        res.redirect("/listings");
        console.log(`Listing (${deleted.title}) Deleted Successfully`);
    })
);

//Add a Review
app.post(
    "/listings/:id/reviews",
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
app.delete(
    "/listings/:id/reviews/:reviewId", 
    wrapAsync(async (req, res) => {
        let {id, reviewId} = req.params;
        await Listing.findByIdAndUpdate(id, {$pull : {reviews : reviewId}}); 
        const del = await Review.findByIdAndDelete(reviewId);
        res.redirect(`/listings/${id}`);
        console.log(`Review (${del.title}) Deleted Successfully`);
    })
);

//For incorrect request
app.use(notFound);

//Displaying Errors
app.use(dispError);

//Starting the server
app.listen(8080, () => {
    console.log("server is listening to port 8080");
});