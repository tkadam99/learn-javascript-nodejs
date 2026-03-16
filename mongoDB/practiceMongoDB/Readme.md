# MongoDB Practice Project (Node.js + Express + Mongoose)

## Overview

This project is a **basic practice application for learning MongoDB with Node.js using Mongoose**.
It demonstrates how to perform **CRUD operations (Create, Read, Update, Delete)** using Express routes.

The application connects to a local MongoDB database and performs operations on a **User collection**.

This project is intended for **learning purposes** to understand how backend applications interact with MongoDB using Mongoose.

---

# Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JavaScript (ES6)

---

# Project Structure

```
practiceMongoDB
│
├── app.js
├── userModel.js
├── package.json
└── README.md
```

---

# Database Setup

The project connects to a local MongoDB instance.

Connection string:

```
mongodb://127.0.0.1:27017/mongopractice
```

This creates a database called:

```
mongopractice
```

Mongoose automatically creates a collection:

```
users
```

---

# User Schema

Defined in `userModel.js`.

```javascript
const userSchema = mongoose.Schema({
    name: String,
    userName: String,
    email: String
});
```

Example document stored in MongoDB:

```
{
  "_id": "664f8c2e5c3d7a9d0a5c1f1a",
  "name": "Tanmay Kadam",
  "userName": "tanmay",
  "email": "tk@gmail.com"
}
```

---

# CRUD Operations

The project implements the following operations using Express routes.

---

## Create User

Route:

```
GET /create
```

Creates a new user in the database.

Example user inserted:

```
{
  name: "Tanmay Kadam",
  email: "tk@gmail.com",
  userName: "tanmay"
}
```

Mongoose method used:

```
userModel.create()
```

---

## Read All Users

Route:

```
GET /read
```

Returns all users stored in the database.

Mongoose method used:

```
userModel.find()
```

Example response:

```
[
  {
    name: "Tanmay Kadam",
    userName: "tanmay",
    email: "tk@gmail.com"
  }
]
```

---

## Read One User

Route:

```
GET /readUser
```

Fetches a single user based on username.

Query used:

```
{ userName: "tanmay" }
```

Mongoose method used:

```
userModel.findOne()
```

---

## Update User

Route:

```
GET /update
```

Updates the email address of a specific user.

Query used:

```
{ name: "Sanjay Kadam" }
```

Update operation:

```
{ email: "sanjay@gmail.com" }
```

Mongoose method used:

```
userModel.findOneAndUpdate()
```

Option used:

```
{ new: true }
```

This returns the updated document instead of the old one.

---

## Delete User

Route:

```
GET /delete
```

Deletes a user from the database.

Query used:

```
{ userName: "sanjay" }
```

Mongoose method used:

```
userModel.findOneAndDelete()
```

---

# Installation

### Clone the repository

```
git clone <your-repository-url>
```

### Navigate to the project folder

```
cd mongo-practice
```

### Install dependencies

```
npm install
```

---

# Running the Application

Start the server:

```
node app.js
```

Server will run on:

```
http://localhost:3000
```

---

# Testing the Routes

Open these URLs in your browser.

Create user:

```
http://localhost:3000/create
```

Read all users:

```
http://localhost:3000/read
```

Read specific user:

```
http://localhost:3000/readUser
```

Update user:

```
http://localhost:3000/update
```

Delete user:

```
http://localhost:3000/delete
```

---

# Learning Objectives

This project helps understand:

* Connecting Node.js to MongoDB
* Creating schemas with Mongoose
* Performing CRUD operations
* Using async/await with database queries
* Structuring a simple backend application

---

# Future Improvements

Possible enhancements:

* Use POST requests instead of GET for create/update
* Add input validation
* Add error handling middleware
* Build a frontend form for user input
* Add authentication
* Convert project to a REST API

---

# Author

Tanmay Kadam
Master of Science in Computer Science
Binghamton University

---

# License

This project is for educational and practice purposes.
