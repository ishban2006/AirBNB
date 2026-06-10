/* This model contains the schema of a review of a particular listing */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const reviewSchema = new Schema({
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }, 
    comment : String,
    rating : {
        type : Number,
        min : 1,
        max : 5
    },
    postedOn : {
        type : Date,
        default : Date.now()
    }
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review; 