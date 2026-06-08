const express = require("express");
const router = express.Router({ mergeParams : true});   //To pass params of parent like id from app to router
const Listing = require("../models/listings");
const Review = require("../models/review");
const User = require("../models/user");
const wrapAsync = require("../utility/wrapAsync");
const passport = require("passport");

router.get("/signup", (req, res) => {
    res.render("user/signup.ejs");
}); 

router.post("/signup", 
    wrapAsync(async (req, res) => {
        try {
            let {username, email, password} = req.body.user;
            const newUser = new User({username, email});
            let registered = await User.register(newUser, password);
            console.log(registered);
            req.login(registered, (err) => {
                if (err) {
                    return next(err);
                }
                req.flash("success", "Welcome To AirBNB");
                res.redirect("/listings");
            })
        } catch(err) {
            req.flash("error", err.message);
            res.redirect("/signup");
        }
    }) 
);

router.get("/login", (req, res) => {
    res.render("user/login.ejs");
}); 

router.post("/login",
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true
    }),
    wrapAsync(async (req, res) => {
        req.flash("success", "Welcome Back to AirBNB");
        res.redirect();
    })
);

router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are Logged Out");
        res.redirect("/listings");
    });
}); 

module.exports = router;