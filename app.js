const express = require("express");
const app = express();
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/wander";
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const {notFound, dispError, flashSuccess} = require("./middleware");
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
const sessOption = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie : {
    expires: Date.now() + (1 * 24 * 3600 * 1000),
    maxAge: 1 * 24 * 3600 * 1000,
    httpOnly: true
  }
};

// //Parse Cookies
// app.use(cookieParser("secretcode"));

//Root Page
app.get("/", (req, res) => {
    console.dir(req.signedCookies);
    let {Name = "Bhosda"} = req.signedCookies;
    res.send(`Welcome to Home page ${Name}`);
});

//Session Info
app.use(expressSession(sessOption));
app.use(flash());

//To flash success message 
app.use(flashSuccess);

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