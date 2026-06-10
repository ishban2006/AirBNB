const express = require("express");
const app = express();
const expressSession = require("express-session");
const MongoStore = require('connect-mongo').default;
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
require('dotenv').config()
const {configDB} = require("./config/db");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const passport = require("passport");
const {configPassport} = require("./config/passport");
const listingR = require("./expressRoutes/listing");
const reviewR = require("./expressRoutes/review");
const userR = require("./expressRoutes/user");
const {notFound, dispError, flashSuccess, checkSize} = require("./config/middleware");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended : true}));     //To parse data of an id
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const store = MongoStore.create({
  mongoUrl: process.env.MONGOATLAS_DB_URL,
  crypto : {
    secret: process.env.SECRET
  },
  //touchAfter : 24*3600,    //Reload after 24hrs
});

store.on("error", (err) => {
    console.log("SESSION STORE ERROR", err);
});

const sessOption = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie : {
    expires: Date.now() + 1 * 24 * 3600 * 1000,
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

//To check file size
app.use(checkSize);

//Displaying Errors
app.use(dispError);

//Starting the server only after DB connection
const startServer = async () => {
    try {
        await configDB();

        app.listen(8080, () => {
            console.log("server is listening to port 8080");
        });
    } catch (err) {
        console.error("Failed to start server:", err);
    }
};

startServer();