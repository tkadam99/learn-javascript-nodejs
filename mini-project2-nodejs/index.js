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

                // let fileName = file.replace(".txt", "");
                let fileName = file;
                let details = data.toString().substring(0, 20) + "...";

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

app.get('/files/:fileName', (req, res, next) => {
    
   fs.readFile(`./files/${req.params.fileName}`,"utf-8", (err, data) => {
    if(err) {
        return res.status(500).send("Error reading file")
    }
    let showTask = [];
    let fileName = req.params.fileName;
    let details = data;

    showTask.push({
        name: fileName,
        desc: details
    });

    // console.log("sgowTask", showTask);

    res.render('showTask',{showTask: showTask});
   });
});

app.get('/edit/:fileName', (req, res, next) => {
    
   fs.readFile(`./files/${req.params.fileName}`,"utf-8", (err, data) => {
    if(err) {
        return res.status(500).send("Error reading file")
    }
    let editTask = [];
    let fileName = req.params.fileName;
    let details = data;

    editTask.push({
        name: fileName,
        desc: details
    });

    res.render('editTask',{editTask: editTask});
   });
});

app.post("/edit/:oldFileName", (req, res) => {

    let oldFileName = req.params.oldFileName.replace(".txt", "");
    console.log("", oldFileName);
    let newFileName = req.body.newTitle.split(' ').join('');
    console.log("", newFileName);

   
    // console.log(req.body);

    if(oldFileName !== newFileName) {
        fs.rename(`./files/${oldFileName}.txt`, `./files/${newFileName}.txt`, (err) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Error Renaming file");
            }
            fs.writeFile(`./files/${newFileName}.txt`, req.body.newDescription, (err) => {
                if(err) {
                    console.log(err);
                    return res.status(500).send("Error Writing the file");
                }
                res.redirect('/')
            })
            
        });
    }
    else {
        fs.writeFile(`./files/${oldFileName}.txt`, req.body.newDescription, (err)=>{
        if(err) {
            console.log(err);
            return res.status(500).send("Error Writing the file");
        }
        res.redirect('/')
    });
    }
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