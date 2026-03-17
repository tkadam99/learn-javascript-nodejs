const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Practise Authentication");
});

//cookies
app.use(cookieParser());

app.get("/set-cookie", (req, res) => {
    res.cookie("username", "tkadam");
    res.send("Cookie-set");
});

app.get("/get-cookie", (req, res) => {
    const username = req.cookies.username;
    res.send(`username is: ${username}`);
});

//$2b$10$rc9vnw2v71qTZVJbRtRzw.wQVPo48kkh4leT.//WqQ2OvF55ZaDIO
//bcrypt
//encrypt
const saltRounds = 10;
const myPlaintextPassword = 'abcdefg99';
const someOtherPlaintextPassword = 'not_bacon';
app.get("/bcrypt", (req, res) => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
        console.log(`salt: ${salt}`);
        bcrypt.hash(myPlaintextPassword, salt, (err, hash) => {
        // Store hash in your password DB.
        console.log(`hashed password: ${hash}`);
        });
    });
    res.send("Hey");
});
/* As we are not yet connected to DB, i have just stored the hashed password in a variable so that we can compare 
    that hashed password with the original password */
const hashPassword = "$2b$10$rc9vnw2v71qTZVJbRtRzw.wQVPo48kkh4leT.//WqQ2OvF55ZaDIO";

//compare/decrypt
app.get("/check", (req, res) => {
    // Load hash from your password DB.
    bcrypt.compare(myPlaintextPassword, hashPassword, function(err, result) {
        // result == true
        console.log(`result: ${result}`);
    });
    res.send("Check pasword with the above generated hashed string");
});



//JsonWebToken
app.get("/jwt", (req, res) => {
    let token = jwt.sign({email: "tk@example.com"}, "secret")
    console.log(token);
    res.cookie("token", token)
    res.send("created jwt token and set it in cookie");
});
app.get("/readjwt", (req, res) => {
    console.log(req.cookies.token);
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);

    res.send("retrieved jwt token from cookie");
});

app.listen(3000, (err) => {
    console.log("Server started at localhost:3000")
})