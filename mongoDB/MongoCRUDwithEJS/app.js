const express = require("express");
const app = express();
const path = require("path");
const userModel = require("./models/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("index", { message: null });
});

app.get("/read", async (req, res) => {
    let allUsers = await userModel.find();
    res.render("read", {users: allUsers});
});

app.post("/create", async (req, res) => {
    let {name, username, email, imgurl} = req.body;
    let createdUser = await userModel.create({
        name: name,
        username: username,
        email: email,
        imgurl: imgurl,
    })
    // res.send(createdUser);
    res.render("index", {message: `${createdUser.name} created successfully`});
});

app.listen(3000, () => {
    console.log("Sever running on port 3000");
})