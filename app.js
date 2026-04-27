const express = require("express");
const app = express();
const mongoose = require("mongoose");
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

app.get("/", (req, res) => {
    res.send("Hi Sexy!!!");
});

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});