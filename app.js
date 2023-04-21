//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get("/home", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/about", function (req, res) {
    res.sendFile(__dirname + "/about.html");
});

app.get("/contact", function (req, res) {
    res.sendFile(__dirname + "/contactUs-main.html");
});

app.get("/signup", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.get("/login", function (req, res) {
    res.sendFile(__dirname + "/login.html");
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000.");
});