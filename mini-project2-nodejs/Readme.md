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

---

### 3. Dynamic Rendering with EJS

The backend passes the list of files to the EJS template:

```
res.render("index", { files: files });
```

The template dynamically generates task cards for each file.

---

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
├── node_modules
│
├── public
│   ├── images
│   ├── javascripts
│   │   └── script.js
│   └── stylesheets
│       └── style.css
│
├── views
│   └── index.ejs
│
├── index.js
├── package.json
├── package-lock.json
├── .prettierrc
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

### Step 1

User opens:

```
http://localhost:3000
```

### Step 2

The server reads all files inside the `files` directory.

```
fs.readdir("./files")
```

### Step 3

The server sends file names to the EJS template.

### Step 4

The template dynamically displays tasks.

### Step 5

User can create new tasks via the form.

### Step 6

The backend saves tasks as text files.

---

# Example Routes

### GET /

Displays all tasks.

```
GET /
```

---

### POST /create

Creates a new task.

```
POST /create
```

Form data:

```
title
description
```

---

# Example UI

The interface contains:

* Task creation form
* Task list displayed as cards
* Tailwind styled UI

Example layout:

```
-------------------------------
 Welcome to Mini Project 2
-------------------------------

[ Title Input ]

[ Description Input ]

[ Create Task ]

-------------------------------
Task Cards

abc.txt
xyz.txt
DailyTask.txt
-------------------------------
```

---

# Possible Future Improvements

This project can be extended with additional features such as:

### View Task Details

Allow users to read full task descriptions.

### Edit Tasks

Modify existing task files.

### Delete Tasks

Remove tasks from the system.

### Database Integration

Replace file storage with:

* MongoDB
* MySQL
* PostgreSQL

### Authentication

Add login and user accounts.

---

# Learning Objectives

This project helps understand:

* Express server setup
* Handling HTTP requests
* Working with file systems in Node.js
* Dynamic rendering using EJS
* Form handling in Express
* Serving static assets

---

# Author

Tanmay Kadam
Master of Science in Computer Science
Binghamton University

---

# License

This project is created for educational purposes.
