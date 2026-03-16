# Mini Project 2 – Node.js Task Manager

## Overview

This project is a simple **Node.js + Express web application** that allows users to create and view tasks. Each task consists of a **title and description**, which are stored as text files on the server. The application reads these files and dynamically displays them on the web page.

The project demonstrates the use of:

* Node.js
* Express.js
* EJS (Embedded JavaScript Templates)
* File System operations (`fs` module)
* HTML forms
* Tailwind CSS for UI styling

This application acts as a **basic task manager or notes application** where tasks are stored as individual `.txt` files.

---

# Features

### 1. Create Tasks

Users can create a task by entering:

* Task title
* Task description

When submitted, the server:

* Converts the title into a filename
* Creates a `.txt` file inside the `files` folder
* Saves the description inside the file

Example:

Input:

Title:

```
Daily Task
```

Description:

```
Finish Node.js assignment
```

File created:

```
files/DailyTask.txt
```

Content:

```
Finish Node.js assignment
```

---

### 2. View Tasks

The application reads all files from the `files` directory and displays them as task cards on the home page.

Example displayed tasks:

```
abc.txt
xyz.txt
DailyTask.txt
```

Each task appears as a card in the UI.

Example card:

```
--------------------------
DailyTask

Finish Node.js assignment...

Edit              Read More
--------------------------
```

### Description Preview

Instead of displaying the entire task description on the homepage, the application shows a **short preview** (first few characters) followed by `...`.

Example:

```
Finish Node.js assignment and review Express...
```

This keeps the UI clean and prevents large content from overflowing the card layout.


---

### 3. Dynamic Rendering with EJS

The backend passes the list of files to the EJS template:

```
res.render("index", { files: files });
```

The template dynamically generates task cards for each file.

---

## 4. Read Full Task

Clicking **Read More** opens the full task description.

Example route:

```
/files/DailyTask.txt
```

This displays the entire task content.

---

### 5. Edit Task

Users can edit an existing task.

Editing allows users to:

* Modify the **task title**
* Update the **task description**

Behavior:

* If the title changes → the file is renamed using `fs.rename()`
* The description is updated using `fs.writeFile()`

Workflow:

```
Task Card
   ↓
Click Edit
   ↓
Edit form opens
   ↓
Update title / description
   ↓
File renamed if necessary
   ↓
Content updated
   ↓
Redirect to home page
```

# Technologies Used

### Backend

* Node.js
* Express.js
* File System (fs module)
* Path module

### Frontend

* EJS templating engine
* Tailwind CSS
* HTML5
* CSS3

---

# Project Structure

```
mini-project2-nodejs
│
├── files
│   ├── abc.txt
│   └── xyz.txt
│
├── public
│   ├── images
│   ├── javascripts
│   │   └── script.js
│   └── stylesheets
│       └── style.css
│
├── views
│   ├── index.ejs
│   └── editTask.ejs
│   └── showTask.ejs
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

# Folder Explanation

## files/

This directory stores all task files.

Each task is saved as a `.txt` file.

Example:

```
Homework.txt
MeetingNotes.txt
```

---

## public/

Contains static files served to the browser.

### stylesheets/

CSS files for styling.

### javascripts/

Client-side JavaScript.

### images/

Any image assets used in the UI.

---

## views/

Contains EJS templates.

```
views/index.ejs
```

This template renders the main task interface.

```
views/showTask.ejs
```

This template renders the selected task after clicking READ MORE.

```
views/editTask.ejs
```

This template helps edit the task.

---

## index.js

Main server file that:

* Creates the Express server
* Handles routes
* Reads and writes files
* Renders the EJS view

---

# Installation

### 1. Clone the Repository

```
git clone https://github.com/yourusername/mini-project2-nodejs.git
```

### 2. Navigate to Project Folder

```
cd mini-project2-nodejs
```

### 3. Install Dependencies

```
npm install
```

This installs required packages such as:

```
express
ejs
```

---

# Running the Application

Start the server:

```
node index.js
```

or

```
npm start
```

The application will run at:

```
http://localhost:3000
```

Open this URL in your browser.

---

# Application Workflow

### 1. User visits the homepage

```
GET /
```

The server:

* Reads all files inside the `files/` directory
* Extracts task titles and description previews
* Sends the data to the EJS template

---

### 2. User creates a task

```
POST /create
```

The server:

* Creates a `.txt` file
* Saves the description
* Redirects to the homepage

---

### 3. User edits a task

```
GET /edit/:fileName
POST /edit/:oldFileName
```

The server:

* Loads existing task data
* Displays the edit form
* Renames the file if the title changed
* Updates the description

---

### 4. User clicks Read More

```
GET /files/:fileName
```

The server:

* Reads the selected file
* Extracts all the data
* Displays the data in new page

---

# Future Improvements

Possible enhancements include:

* Delete tasks
* Add confirmation dialogs
* Convert file storage to a database (MongoDB / PostgreSQL)
* Add authentication
* Improve UI with animations and transitions
* Implement search and filtering

---

# Learning Objectives

This project demonstrates:

* Setting up an **Express server**
* Handling **HTTP requests**
* Working with the **Node.js file system**
* Dynamic rendering using **EJS**
* Processing **form data**
* Building a simple **task management interface**
* Serving static assets

---

# Author

Tanmay Kadam
Master of Science in Computer Science
Binghamton University

---

# License

This project is created for educational purposes.
