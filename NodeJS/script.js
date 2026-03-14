import express from 'express'
// const express = require("express");

const app = express();


// session cookie (middleware) : mainly used for authentication 

//this will help read the frontend data before we use postman
app.use(express.json());
app.use(express.urlencoded({ extended: true}))


//----------------------------------------------------------------------

//middleware
app.use((req, res, next) => {
    console.log("Middleware");
    next();
});

app.use((req, res, next) => {
    console.log("Middleware again 2.0");
    next();
})

//----------------------------------------------------------------------------

//routes
app.get('/', (req, res, next) => {
  res.send('Home page')
})
app.get('/profile', (req, res, next) => {
  res.send('Tanmay Kadam')
})

app.get('/welcome', (req, res, next) => {
  res.send('Welcome Tanmay Kadam to node js');
})

app.get('/errorhandler', (req, res, next) => {
  return next(new Error("Something went wrong"));
});

//--------------------------------------------------------------------------------

// Error Handler (default)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke");
})


//----------------------------------------------------------------------------------

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})