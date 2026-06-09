const express = require("express");
const router = express.Router();
const passport = require("passport");
const wrapAsync = require("../utility/wrapAsync");
const { saveURL } = require("../config/middleware");

const userController = require("../controllers/users");

//SignUp
router.
    route("/signup").
        get(userController.renderSignupForm).   //SignUp Form
        post(
            wrapAsync(userController.signup)    //SignUp
        );

//Login
router.
    route("/login").
        get(userController.renderLoginForm).     //Login Form
        post(                                    //Login
        saveURL,
        passport.authenticate("local", {
            failureRedirect: "/login",
            failureFlash: true
        }),
        userController.login
    );

// Logout
router.
    route("/logout").
        get(userController.logout);


module.exports = router;