const { listingSchema } = require("./schema");
const expressError = require("./utility/expressError");

// Joi Validation Middleware
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

// 404 Middleware
module.exports.notFound = (req, res, next) => {
    console.log("Incorrect page requested");
    next(new expressError(404, "Page Not Found"));
};