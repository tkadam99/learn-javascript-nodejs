const express = require("express");
const app = express();

const userModel = require("./userModel");


app.get("/", (req, res) => {
    res.send("HEY");
});


app.listen(3000, () => {
    console.log("Sever running on port 3000");
})