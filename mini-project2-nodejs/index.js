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

    fs.readdir("./files", (err, files) => {

        if (err) {
            return res.status(500).send("Error reading directory");
        }

        let task = [];
        let completed = 0;

        if(files.length === 0){
            return res.render("index", { task: task });
        }

        files.forEach((file) => {

            fs.readFile(`./files/${file}`, (err, data) => {

                let fileName = file.replace(".txt", "");
                let details = data.toString().substring(0, 40) + "...";

                task.push({
                    name: fileName,
                    desc: details
                });

                completed++;

                if (completed === files.length) {
                    res.render("index", { task: task });
                }

            });

        });

    });

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