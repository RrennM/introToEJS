const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// tell express to use bodyParser
app.use(bodyParser.urlencoded({extended: true}));

// tell express our files will be ejs files
app.set("view engine", "ejs");

// Create a friends array with proper scope
let friends = ["Brad", "Wames", "Diana", "Wosie", "Otis"];

app.get("/", function(req, res) {
    res.render("home");
});

app.post("/addFriend", function(req, res) {
    // Get the newFriend from the input and set it to a variable
    let newFriend = req.body.newFriend;
    // Push the newFriend to the friends array
    friends.push(newFriend);
    // Redirect the page load back to the /friends page
    res.redirect("/friends");
});

app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends});
});

app.listen(3000, function() {
    console.log("Server is listening on Port 3000!")
});