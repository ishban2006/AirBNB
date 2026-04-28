const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/wander";
const Listing = require("./Models/listings");

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

app.get("/", (req, res) => {
    res.send("Hi Sexy!!!");
    console.log("Response send");
});

app.get("/listings", async (req, res) => {      //Index Route
    const allListings = await Listing.find({});
    // console.log(allListings);
    res.render("../views/listing/index.ejs", { allListings });
    console.log("Request rendered to index.ejs");
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