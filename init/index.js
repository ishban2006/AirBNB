/* Initialize DataBase */
const mongoose = require("mongoose");
const iData = require("./data");
const Listing = require("../models/listings");
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
    iData.data = iData.data.map((obj) => ({
        ...obj, 
        owner : "6a26a0854ef82d42e04548fc"
    }));
    await Listing.insertMany(iData.data);
    console.log("Data initialized");
};

initDB();