# MongoCRUDwithEJS

## Overview

**MongoCRUDwithEJS** is a simple full-stack practice project built with **Node.js, Express, MongoDB, Mongoose, and EJS**.
It demonstrates complete **CRUD operations** with **server-side rendering**.

The application allows users to:

* Create a new user
* View all users
* Edit an existing user
* Delete a user

Each user record includes:

* Name
* Username
* Email
* Image URL

The project uses **MongoDB** for data storage, **Mongoose** for schema modeling, **Express** for routing, and **EJS** for rendering dynamic HTML pages.

---

## Features

### 1. Create User

Users can be created using a form on the home page.

Fields:

* Name
* Username
* Image URL
* Email

After successful creation, a toast message is shown.

---

### 2. Read All Users

All stored users are displayed on the **All Users** page as cards.

Each card shows:

* User image
* Name
* Username
* Email

---

### 3. Edit User

Each user card includes an **Edit** link.

The edit page:

* Prefills the current user data
* Allows updating all fields
* Saves the changes to MongoDB
* Shows a success message after update

---

### 4. Delete User

Each user card includes a **Delete** link.

When clicked:

* The selected user is removed from MongoDB
* The user list refreshes
* A success message is displayed

---

### 5. Toast Notifications

Toast messages are displayed for:

* User creation
* User update
* User deletion

A small client-side JavaScript file handles fade-in and fade-out transitions.

---

## Technologies Used

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Frontend

* EJS
* Tailwind CSS
* HTML5
* CSS3
* JavaScript

---

## Project Structure

```bash
MongoCRUDwithEJS
│
├── models
│   └── user.js
│
├── public
│   ├── images
│   ├── javascripts
│   │   └── script.js
│   └── stylesheets
│       └── style.css
│
├── views
│   ├── editUser.ejs
│   ├── index.ejs
│   └── read.ejs
│
├── app.js
├── package-lock.json
├── package.json
└── Readme.md
```

---

## How It Works

### Home Page

Route:

```bash
GET /
```

Renders the home page with a form to create a new user.

---

### Create User

Route:

```bash
POST /create
```

Creates a new user document in MongoDB and displays a success toast.

---

### Read All Users

Route:

```bash
GET /read
```

Fetches all users from MongoDB and renders them in `read.ejs`.

---

### Edit User Page

Route:

```bash
GET /edit/:id
```

Fetches the selected user by MongoDB `_id` and renders the edit form.

---

### Update User

Route:

```bash
POST /edit/:id
```

Updates the selected user in MongoDB and re-renders the users list with a success message.

---

### Delete User

Route:

```bash
GET /delete/:id
```

Deletes the selected user and refreshes the user list with a success message.

---

## Database Configuration

The application connects to the following local MongoDB database:

```bash
mongodb://127.0.0.1:27017/testapp1
```

Database name:

```bash
testapp1
```

Mongoose model:

```javascript
mongoose.model("user", userSchema)
```

---

## User Schema

Defined in `models/user.js`:

```javascript
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    imgurl: String,
});
```

Example MongoDB document:

```json
{
  "_id": "6650f0d4d7d2a53a92345678",
  "name": "Tanmay Kadam",
  "username": "tanmay",
  "email": "tk@gmail.com",
  "imgurl": "https://example.com/profile.jpg",
  "__v": 0
}
```

---

## Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Move into the project folder

```bash
cd MongoCRUDwithEJS
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure your local MongoDB server is running.

### 5. Run the app

```bash
node app.js
```

Server runs at:

```bash
http://localhost:3000
```

---

## Pages

### `/`

Home page with create user form

### `/read`

Displays all users

### `/edit/:id`

Edit page for a selected user

### `/delete/:id`

Deletes the selected user

---

## UI Notes

* Tailwind CSS is loaded using CDN
* Static assets are served from the `public` folder
* Toast messages are handled using `public/javascripts/script.js`

---

## Learning Objectives

This project helps in understanding:

* MongoDB CRUD operations with Mongoose
* Express routing
* Server-side rendering using EJS
* Form handling with Express
* Dynamic route parameters
* Updating and deleting MongoDB documents by `_id`
* Displaying dynamic success messages in the UI

---

## Future Improvements

Possible enhancements:

* Add form validation
* Add default profile image if image URL is missing
* Add confirmation before delete
* Use POST/DELETE instead of GET for delete
* Add Mongoose validation (`required`, `unique`)
* Improve UI responsiveness
* Add search and filter functionality

---

## Author

**Tanmay Kadam**
Master of Science in Computer Science
Binghamton University

---

## License

This project is for educational and practice purposes.
