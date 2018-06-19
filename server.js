// server.js
// load the things we need
var express = require("express");
var app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function(req, res) {
  res.status(200).json({ status: "success", message: "entry point" });
});

// about page
app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000);
console.log("3000 is the magic port");
