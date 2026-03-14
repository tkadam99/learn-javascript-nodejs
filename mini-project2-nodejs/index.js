const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();


// app.use(express.static())
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    fs.readdir(`./files`, (err, files) => {
        console.log(files);
        files.forEach((files) => {
            fs.readFile(`./files/${files}`, (err, data) =>{
                console.log(data.toString());
            });
        })
        
        res.render("index", {files: files});
    })
});

app.post("/create", (req, res) => {
    // console.log(req.body);
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.description, (err)=>{
        if(err) {
            console.log(err);
            return res.status(500).send("Error Writing the file");
        }
        res.redirect('/')
    });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})