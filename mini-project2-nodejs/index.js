const express = require("express");
const path = require("path");

const app = express();


// app.use(express.static())
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
    res.render("index");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})