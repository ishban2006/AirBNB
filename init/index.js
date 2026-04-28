const mongoose = require("mongoose");
const iData = require("./data");
const Listing = require("../Models/listings");
const mongoURL = "mongodb://127.0.0.1:27017/wander";

main()
    .then(() => {
        console.log("Connected to DataBase");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(mongoURL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    console.log("Older ones removed");
    await Listing.insertMany(iData.data);
    console.log("Data initialized");
};

initDB();