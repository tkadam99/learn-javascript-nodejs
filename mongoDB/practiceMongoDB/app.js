const express = require("express");
const app = express();

const userModel = require("./userModel");
const { name } = require("ejs");

app.get("/", (req, res) => {
    res.send("HEY");
});

app.get("/create", async (req, res) => {
    let createdUser = await userModel.create({
        name: "Tanmay Kadam",
        email: "tk@gmail.com",
        userName: "tanmay",
    })
    res.send(createdUser);
});

app.get("/update", async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({name: "Sanjay Kadam"}, {email: "sanjay@gmail.com"}, {new: true})
    res.send(updatedUser);
});

app.get("/read", async (req, res) => {
    let allUsers = await userModel.find()
    res.send(allUsers);
});
app.get("/readUser", async (req, res) => {
    let user = await userModel.findOne({userName: "tanmay"})
    res.send(user);
});

app.get("/delete", async (req, res) => {
    let deleteUser = await userModel.findOneAndDelete({userName: "sanjay"})
    res.send(deleteUser);
});

app.listen(3000, () => {
    console.log("Sever running on port 3000");
})