const { profile } = require("console");
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ejs setup
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    if (err) console.error(err);
    res.render("index", { files: files });
    console.log("read files: ", files);
  });
});

app.get("/files/:fileName", (req, res) => {
  fs.readFile(`./files/${req.params.fileName}`, "utf-8", (err, data) => {
    data = data.split("*fileSplit*");
    console.log("data: ", data);
    res.render("show", { data: data });
  });
});

app.post("/create", function (req, res) {
  console.log(req.body);
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    `${req.body.title}*fileSplit*${req.body.details}\n`,
    (err) => {
      if (err) console.error(err);
      res.redirect("/");
    }
  );
});

app.get("/profile/:username", (req, res) => {
  res.send(`Welcome , ${req.params.username}`);
});

app.get("/profile/:username/:age", (req, res) => {
  console.log("Inside get for progile/:username/:age , received.");
  res.send(`username\:${req.params.username} , age\: ${req.params.age}`);
});

//edit feature

app.get("/edit/:fileName", (req, res) => {
  // console.log(`./files/${req.params.fileName}`);
  fs.readFile(`./files/${req.params.fileName}`, "utf-8", (err, data) => {
    data = data.split("*fileSplit*");
    data.unshift(data[0].split(" ").join("") + ".txt");
    console.log("inside get for edit page.", data);
    res.render("edit", { data: data });
  });
});

app.post("/edit/:fileName", (req, res) => {
  // console.log(
  //   "req.title: ",
  //   req.body.title,
  //   "details: ",
  //   req.body.details,
  //   "fileName: ",
  //   req.body.fileName
  // );
  fs.writeFile(
    `./files/${req.body.fileName}`,
    `${req.body.title}*fileSplit*${req.body.details}`,
    (err) => {
      console.error(err);
      res.redirect("/");
    }
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
