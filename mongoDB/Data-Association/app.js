const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.get("/create", async (req, res) => {
    let createdUser = await userModel.create({
        username: "Tanmay",
        email: "tk@gmail.com",
        age: 20
    });
    res.send(createdUser);
});

app.get("/post/create", async (req, res) => {
    let post = await postModel.create({
        postdata: "This is post 1",
        user: "69ba116580be99494253af41",
    });

    let user = await userModel.findOne({_id: "69ba116580be99494253af41"});

    user.posts.push(post._id);
    await user.save();

    res.send({post, user});
});


app.listen(3000, (err) => {
    console.log("Server running on localhost:3000");
})