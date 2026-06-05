const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/wander";
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const {notFound, dispError} = require("./middleware");
const listingR = require("./expressRoutes/listing");
const reviewR = require("./expressRoutes/review");
 
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

//Listings
app.use("/listings", listingR);

//Reviews
app.use("/listings/:id/reviews", reviewR)

//For incorrect request
app.use(notFound);

//Displaying Errors
app.use(dispError);

//Starting the server
app.listen(8080, () => {
    console.log("server is listening to port 8080");
});