const express = require("express");
const app = express();
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const {configDB} = require("./config/db");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const passport = require("passport");
const {configPassport} = require("./config/passport");
const listingR = require("./expressRoutes/listing");
const reviewR = require("./expressRoutes/review");
const userR = require("./expressRoutes/user");
const {notFound, dispError, flashSuccess} = require("./config/middleware");
const path = require("path");

configDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended : true}));     //To parse data of an id
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
const sessOption = {
  secret: 'mysecretcode',
  resave: false,
  saveUninitialized: true,
  cookie : {
    expires: Date.now() + (1 * 24 * 3600 * 1000),
    maxAge: 1 * 24 * 3600 * 1000,
    httpOnly: true
  }
};

//Session Info
app.use(expressSession(sessOption));
app.use(flash());

//Password Mgmt.
app.use(passport.initialize());
app.use(passport.session());
configPassport();

//To flash success message 
app.use(flashSuccess);

//Root Page
app.get("/", (req, res) => {
    res.render("home");
});

//Listings
app.use("/listings", listingR);

//Reviews
app.use("/listings/:id/reviews", reviewR)

//SignUp
app.use("/", userR);

//Login
app.use("/", userR);

//For incorrect request
app.use(notFound);

//Displaying Errors
app.use(dispError);

//Starting the server
app.listen(8080, () => {
    console.log("server is listening to port 8080");
});