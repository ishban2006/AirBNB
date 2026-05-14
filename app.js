const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/wander";
const Listing = require("./models/listings");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
 
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

app.get("/", (req, res) => {
    res.send("Hi Sexy!!!");
    console.log("Response send");
});

//Index Route
app.get("/listings", async (req, res) => {      
    const allListings = await Listing.find({});
    // console.log(allListings);
    res.render("../views/listing/index", { allListings });
    console.log("Request rendered to index.ejs");
});

//Show form to add new listing
app.get("/listings/createNew", async (req, res) => {
    res.render("../views/listing/createNew");
    console.log("Request rendered to createNew.ejs");
});

//Save the new listing in database
app.post("/listings/createNew", async (req, res) => {
    const newElem = new Listing (req.body.listing);
    await newElem.save();
    res.redirect("/listings");
    console.log("Data saved in database");
}); 

//Show Complete Info Route
app.get("/listings/:id", async (req, res) => {     
     let {id} = req.params;         //id is created by mongodb
     const compData = await Listing.findById(id);
     res.render("../views/listing/showInfo", { compData });
     console.log("Request rendered to showInfo.ejs");
});

//Edit Info
app.get("/listings/:id/edit", async (req, res) => {
    let {id} = req.params;         
    const compData = await Listing.findById(id);
    res.render("../views/listing/editInfo", { compData });
    console.log("Request rendered to editInfo.ejs");
});

//Save Edit Info
app.put("/listings/:id", async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });   //Deconstruct object into individua values
    res.redirect(`/listings/${id}`);
    console.log("Data edited successfully");
});

//Delete a Listing
app.delete("/listings/:id", async (req, res) => {
    let {id} = req.params;
    const deleted = await Listing.findByIdAndDelete(id);  
    console.log(`Listing : ${deleted.title} successfully deleted`);
    res.redirect("/listings");
});

// app.get("/testListing", async(req, res) => {
//     let sampleList = new Listing({
//         title : "My Palace",
//         desription : "Full of Peace",
//         image : "https://unsplash.com/photos/aerial-photography-of-brown-rock-formation-with-plants-Tslr2zdQdnw",
//         price : 15000,
//         location : "Panaji, Goa",
//         country : "India",
//     });

//     await sampleList.save();
//     console.log("Sample was Saved in collection");
//     res.send("Test Successful");
// });

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});