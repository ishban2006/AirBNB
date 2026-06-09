const User = require("../models/user");

// Signup Form
module.exports.renderSignupForm = (req, res) => {
    res.render("user/signup");
};

// Signup
module.exports.signup = async (req, res, next) => {
    try {
        let { username, email, password } = req.body.user;

        const newUser = new User({
            username,
            email
        });

        let registered = await User.register(newUser, password);
        req.login(registered, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome To AirBNB");
            res.redirect("/listings");
        });

    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};

// Login Form
module.exports.renderLoginForm = (req, res) => {
    res.render("user/login");
};

// Login
module.exports.login = async (req, res) => {
    req.flash("success", "Welcome Back to AirBNB");
    let redirectLink = res.locals.redirURL || "/listings";
    res.redirect(redirectLink);
};

// Logout
module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }

        req.flash("success", "You are Logged Out");
        res.redirect("/listings");
    });
};