const { listingSchema, reviewSchema } = require("./schema");
const expressError = require("./utility/expressError");

// Joi Validation Middleware For Listing
module.exports.validateListing = (req, res, next) => {
    let result = listingSchema.validate(req.body);
    let error = result.error;

    if (error) {
        let errorMsg = error.details
            .map((el) => el.message)
            .join(",");

        throw new expressError(400, errorMsg);
    }
    next();
};

// Joi Validation Middleware For Review
module.exports.validateReview = (req, res, next) => {
    let result = reviewSchema.validate(req.body);
    let error = result.error;

    if (error) {
        let errorMsg = error.details
            .map((el) => el.message)
            .join(",");

        throw new expressError(400, errorMsg);
    }
    next();
};

// 404 Middleware
module.exports.notFound = (req, res, next) => {
    console.log("Incorrect page requested");
    next(new expressError(404, "Page Not Found"));
};

//Displaying Errors
module.exports.dispError = (err, req, res, next) => {
    let {statusCode = 500, message = "Something Went Wrong"} = err;
    console.log("Error handled:", message);
    res.status(statusCode).render("error.ejs", {err});
}