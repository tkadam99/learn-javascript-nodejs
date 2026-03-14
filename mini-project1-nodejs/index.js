//These imports will work when type is set to module in package.json
// import express from "express";
// import ejs from "ejs";
// import path from "path";

//This is how we get the dirname when type=module
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();


//Parsers
//Step 3: Setting up parsers for form
app.use(express.json());
app.use(express.urlencoded({ extended:true}))

app.use(express.static(path.join(__dirname, "public")));

// console.log(__dirname)

app.set("view engine", "ejs");


app.get('/', (req, res, next) => {
  res.render('index')
})

//Dynamic Routing
app.get('/profile/:username', (req, res, next) => {
  res.send(`Hi ${req.params.username}`)
})
app.get('/author/:username/:age', (req, res, next) => {
  res.send(`Hi ${req.params.username} your age is ${req.params.age}`)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})