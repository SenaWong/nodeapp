/**
 * Created by Edmund Wong on 9/15/2016.
 */
var express = require("express");
var app = express();
var rooms = require("./data/rooms.json");

app.set("views", "./views");
app.set('view engine', 'pug');

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));

app.get('/', function (req, res) {
    res.render("index", { title: "Home"});
});

app.get('/admin/hello', function (req, res) {
    res.render("rooms", {
        title: "Admin Room",
        rooms: rooms
    });
});

app.listen(3000, function() {
    console.log('toktok tokkok on port 3000');
});