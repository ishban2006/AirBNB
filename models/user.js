/* This model contains the schema of a user */
const { required } = require("joi");
const mongoose = require("mongoose");
const passpostLocMong = require("passport-local-mongoose").default;
const Schema = mongoose.Schema;
 
const userSchema = new Schema({
    email : {
        type : String,
        required : true
    }
});
userSchema.plugin(passpostLocMong);

const User = mongoose.model("User", userSchema);
module.exports = User; 