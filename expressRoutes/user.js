const express = require("express");
const router = express.Router({ mergeParams : true});   //To pass params of parent like id from app to router
const Listing = require("../models/listings");
const Review = require("../models/review");
const User = require("../models/user");
const wrapAsync = require("../utility/wrapAsync");

router.get("/", (req, res) => {
    res.render("user/signup.ejs");
});

router.post("/", 
    wrapAsync(async (req, res) => {
        try {
            let {username, email, password} = req.body.user;
            const newUser = new User({username, email});
            let registered = await User.register(newUser, password);
            console.log(registered);
            req.flash("success", "Welcome to AirBNB");
            res.redirect("/listings");
        } catch(err) {
            req.flash("error", err.message);
            res.redirect("/signup");
        }
    })
);

module.exports = router;