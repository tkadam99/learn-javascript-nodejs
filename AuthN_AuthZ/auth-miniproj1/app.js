const express = require("express");
const app = express();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");



const userModel = require("./models/user");


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));



app.get('/', (req, res, next) => {
  res.render('index');
});

app.post('/create', (req, res, next) => {
  let {username, email, password, age} = req.body;

  // bcrypt - here we will hash the password before saving in database for security purpose
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
        let createdUser = await userModel.create({
            username,
            email,
            password: hash,
            age,
        });

        //Now that user is created , directly login and create a jwt token for user
        //logged in directly after user creates account
        let token = jwt.sign({email}, "shhhhhhhhhhhhhh");
        res.cookie("token", token);
        res.send(createdUser);
    });
  });
});

//login
app.get("/login", (req, res) => {
    res.render("login")
})
app.post("/login", async (req, res) => {
    // let email = req.body.email;
    let user = await userModel.findOne({email: req.body.email});
    if(!user) return res.send("Email or Password is wrong");
    
    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if(result) {
            let token = jwt.sign({email: user.email}, "shhhhhhhhhhhhhh");
            res.cookie("token", token);
            res.send("log in successful");
        }
        else {
            res.send("Email or Password is wrong");
        }
    });
});

//logout
app.get("/logout", (req,res) => {
    res.cookie("token", "");
    res.redirect("/")
})






app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server running on http://localhost:3000");
    }
})