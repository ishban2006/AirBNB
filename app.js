const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/wander";
const Listing = require("./models/listings");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utility/wrapAsync");
const expressError = require("./utility/expressError");
 
main()
    .then(() => {
        console.log("Connected to DataBase");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(mongoURL);
}

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended : true}));     //To parse data of an id
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

//Root
app.get("/", (req, res) => {
    res.send("Welcome to Home page");
    console.log("Response send to Root");
});

//Index Route
app.get(
    "/listings", 
    wrapAsync(async (req, res) => {      
        const allListings = await Listing.find({});
        // console.log(allListings);
        res.render("../views/listing/index", { allListings });
        console.log("Request rendered to index.ejs");
    })
);

//Show form to add new listing
app.get(
    "/listings/createNew", 
    wrapAsync(async (req, res) => {
        res.render("../views/listing/createNew");
        console.log("Request rendered to createNew.ejs");
    })
);

//Save the new listing in database
app.post(
    "/listings/createNew", 
    wrapAsync(async (req, res, next) => {
        if (!req.body.listing) {
            throw new expressError(400, "Send Valid Data");
        }
        const newElem = new Listing (req.body.listing);
        await newElem.save();
        res.redirect("/listings");
        console.log("Data saved in database");
    })
); 

//Show Complete Info Route
app.get(
    "/listings/:id", 
    wrapAsync(async (req, res) => {             //Handling database errors
        let {id} = req.params;         //id is created by mongodb
        const compData = await Listing.findById(id);
        res.render("../views/listing/showInfo", { compData });
        console.log("Request rendered to showInfo.ejs");
    })
);

//Edit Info
app.get(
    "/listings/:id/edit", 
    wrapAsync(async (req, res) => {
        let {id} = req.params;         
        const compData = await Listing.findById(id);
        res.render("../views/listing/editInfo", { compData });
        console.log("Request rendered to editInfo.ejs");
    })
);

//Save Edit Info
app.put(
    "/listings/:id", 
    wrapAsync(async (req, res) => {
        if (!req.body.listing) {
            throw new expressError(400, "Send Valid Data");
        }
        let {id} = req.params;
        await Listing.findByIdAndUpdate(id, { ...req.body.listing });   //Deconstruct object into individua values
        console.log("Data edited successfully");
        res.redirect(`/listings/${id}`);
    })
);

//Delete a Listing
app.delete(
    "/listings/:id", 
    wrapAsync(async (req, res) => {
        let {id} = req.params;
        const deleted = await Listing.findByIdAndDelete(id);  
        console.log(`Listing : ${deleted.title} successfully deleted`);
        res.redirect("/listings");
    })
);

app.use((req, res, next) => {
    console.log("Incorrect page requested");
    next(new expressError(404, "Page Not Found"));
});

//Middleware for error handling
app.use((err, req, res, next) => {
    let {statusCode = 500, message = "Chud Gae Guru"} = err;
    console.log("Some Error Occured But Handled Properly");
    res.status(statusCode).send(message);
});

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});