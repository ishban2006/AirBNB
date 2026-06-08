/* This model contains the schema of a particular location for airbnb */
const mongoose = require("mongoose");
const { listingSchema } = require("../schema");
const Schema = mongoose.Schema;
const Review = require("./review");
const defaultURL = "https://images.unsplash.com/photo-1636716731103-11242116065a?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 
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
    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : "Review"
        },
    ],
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
});

listSchema.post("findOneAndDelete", async (list) => {
    if (list.reviews.length) {
        let res = await Review.deleteMany({ _id : {$in : list.reviews}});
        console.log(res);
    }
});

const Listing = mongoose.model("Listing", listSchema);
module.exports = Listing; 