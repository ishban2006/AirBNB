/* This model contains the list of different locations for airbnb */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const defaultURL = "https://unsplash.com/photos/an-artists-rendering-of-a-forest-with-birds-flying-over-it-8Xhr_mrQozM";

const listSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    description : String,
    image: {
        filename: {
            type: String,
            default: "listingimage"
        },
        url: {
            type: String,
            default: defaultURL,
            set : (v) => v === "" ? defaultURL : v,
        }
    },
    price : Number,
    location : String,
    country : String,
});

const Listing = mongoose.model("Listing", listSchema);
module.exports = Listing;