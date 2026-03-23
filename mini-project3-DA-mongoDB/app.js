const express = require("express");
const app = express();

const path = require("path");
const userModel = require("./models/user");
const postModel = require("./models/post");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

//--------------------------------------------------------------------------------------------

app.get("/", (req, res) => {
    res.render("index");
});

//render login page
app.get("/login", (req, res) => {
    const message = req.cookies.flashMessage || null;
    res.clearCookie("flashMessage");
    res.render("login", { message: message || null });
});

//logout
app.get("/logout", (req,res) => {
    res.cookie("token", "");
    res.cookie("flashMessage", "User is logged out", { maxAge: 2000 });
    // res.redirect("/login?message=User%20is%20logged%20out");
    res.redirect("/login");
});

//--------------------------------------------------------------------------------------------

//Protected routes

//Profile
app.get("/profile", isLoggedIn, async (req, res) => {
    const message = req.cookies.flashMessage || null;
    res.clearCookie("flashMessage");

    let user = await userModel.findOne({ email: req.user.email });
    console.log(user);
    res.render("profile", {user, message} );
});

// Post form page
app.get("/createpost", isLoggedIn, async (req, res) => {
    const message = req.cookies.flashMessage || null;
    res.clearCookie("flashMessage");

    let user = await userModel.findOne({ email: req.user.email });
    console.log(user);
    res.render("postform", {user, message} );
});

//---------------------------------------------------------------------------------------------

//Post Routes
//Create Account
app.post("/register", async (req, res) => {
    try {
        let { name, username, age, email, password } = req.body;

        let user = await userModel.findOne({ email });
        if (user) return res.status(400).send("User already exists");

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        let createdUser = await userModel.create({
            name,
            username,
            age,
            email,
            password: hash,
        });

        let token = jwt.sign(
            { email: createdUser.email, userid: createdUser._id },
            "shhhhhhhhhhhhhh"
        );

        res.cookie("token", token);
        // res.send("Account registered successfully");
        res.cookie("flashMessage", "Account Registered Successfully", { maxAge: 2000 });
        res.redirect("/profile");

        // res.redirect("/profile?message=Account%20Registered%20Successfully")
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
});

//Login into account
app.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body;

        let user = await userModel.findOne({ email });
        if (!user) {
            res.cookie("flashMessage", "Wrong email or password", { maxAge: 2000 });
            return res.redirect("/login");
        }

        let isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.cookie("flashMessage", "Wrong email or password", { maxAge: 2000 });
            return res.redirect("/login");
        } 

        let token = jwt.sign(
            { email: user.email, userid: user._id },
            "shhhhhhhhhhhhhh"
        );

        res.cookie("token", token);
        // res.send("Login successful");
        // res.redirect("/profile?message=Log-in%20Successfull")
        res.cookie("flashMessage", "Logged in Successfully", { maxAge: 2000 });
        res.redirect("/profile");

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
});

//----------------------------------------------------------------------------------------------

// Middleware for protected routes
function isLoggedIn(req, res, next) {
    try {
        const token = req.cookies.token;

        // No token at all
        if (!token) {
            // return res.redirect("/login?message=You%20must%20log%20in");
            res.cookie("flashMessage", "You must log in", { maxAge: 2000 });
            return res.redirect("/login");
        }

        // Verify token
        const data = jwt.verify(token, "shhhhhhhhhhhhhh");
        req.user = data;

        next();
    } catch (err) {
        // Token invalid or expired
        // return res.redirect("/login?message=Session%20expired.%20Please%20log%20in%20again");
        res.cookie("flashMessage", "Session expired. Please log in again", { maxAge: 2000 });
        return res.redirect("/login");
    }
}

//-------------------------------------------------------------------------------------------------------------


app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server running on http://localhost:3000");
    }
});