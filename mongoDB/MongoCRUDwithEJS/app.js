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
    res.render("read", {users: allUsers, message: null});
});

app.get("/edit/:id", async (req, res) => {
    // console.log("name is", req.params.name);
    let id = req.params.id;
    let editUser = await userModel.findOne({_id: id});
    // console.log(editUser);
    res.render("editUser", {editUser: editUser});
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

app.post("/edit/:id", async (req, res) => {
    let {editname, editusername, editemail, editimgurl} = req.body;
    let id = req.params.id;
    // let edituser = await userModel.findOne({name: oldname})
    // console.log("edited", edituser);
    // console.log("neweditedname", editname);
    let editedUser = await userModel.findOneAndUpdate({_id: id},{
        name: editname,
        username: editusername,
        email: editemail,
        imgurl: editimgurl,
    }, {new: true})

    let allUsers = await userModel.find();

    res.render("read", {users:allUsers, message: `${editedUser.name} was updated successfully`});
});

app.get("/delete/:id", async (req, res) => {
    let id = req.params.id;
    let userToBeDeleted = await userModel.findOne({_id: id});
    let deleteUser = await userModel.findOneAndDelete({_id: id});
    console.log(deleteUser);
    // let deleteUser = await userModel.findOneAndDelete({userName: "sanjay"})
    // res.send(deleteUser);
    let allUsers = await userModel.find();

    res.render("read", {users:allUsers, message: `${userToBeDeleted.name} was deleted successfully`});
});

app.listen(3000, () => {
    console.log("Sever running on port 3000");
})