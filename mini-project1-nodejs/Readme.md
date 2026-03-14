# Mini Project 1 - Node.js + Express + EJS

## 📌 Project Overview

This project is a simple web application built to understand the **fundamentals of Node.js and Express.js**.

It demonstrates how to:

* Create a backend server
* Render dynamic HTML using EJS
* Serve static files (CSS, JS, Images)
* Implement dynamic routing
* Connect frontend and backend

---

# 🧠 Learning Objectives

This mini project helps understand the core concepts of Node.js web development:

* Express server setup
* Routing
* Dynamic routing with parameters
* Template rendering using EJS
* Serving static files
* Handling request data
* Basic project structure for Node applications

---

# 🛠 Technologies Used

* Node.js
* Express.js
* EJS
* HTML
* CSS
* JavaScript
* Tailwind CSS (CDN)

---

# ⚙️ Project Setup Steps

## Step 1: Initialize the Project

Create a Node.js project:

```bash
npm init -y
```

This generates the `package.json` file.

---

## Step 2: Install Express

Install the Express framework:

```bash
npm install express
```

Express is used to create the server and handle routing.

---

## Step 3: Setting Up Parsers (For Forms)

Add middleware to parse incoming request data:

```javascript
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

This allows the server to read data coming from **forms and JSON requests**.

---

## Step 4: Setting Up EJS

Install EJS:

```bash
npm install ejs
```

Configure EJS as the view engine:

```javascript
app.set("view engine", "ejs");
```

Now Express can render `.ejs` files inside the `views` folder.

Example:

```javascript
res.render("index");
```

---

## Step 5: Setting Up Public Static Files

Create a `public` folder to store:

* CSS
* JavaScript
* Images

Enable static files in Express:

```javascript
app.use(express.static("public"));
```

This allows the browser to access files like:

```
/stylesheets/style.css
/javascripts/script.js
```

---

## Step 6: Dynamic Routing

Dynamic routes allow URLs to contain variables.

Example:

```javascript
app.get('/profile/:username', (req, res) => {
    res.send(`Hi ${req.params.username}`)
})
```

Example URL:

```
http://localhost:3000/profile/john
```

Output:

```
Hi john
```

---

### Getting Data From URL Parameters

Example:

```javascript
app.get('/author/:username/:age', (req, res) => {
    res.send(`Hi ${req.params.username} your age is ${req.params.age}`)
})
```

Example URL:

```
/author/john/25
```

Output:

```
Hi john your age is 25
```

---

# 📂 Project Structure

```
mini-project1-nodejs
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
├── .gitignore
└── README.md
```

---

# ▶️ Running the Project

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node index.js
```

Then open:

```
http://localhost:3000
```

---

# 📚 Key Concepts Learned

* Node.js server creation
* Express routing
* Dynamic routing
* EJS template rendering
* Static file serving
* Basic full-stack application workflow

---

# 📜 License

This project is created for **learning purposes**.
