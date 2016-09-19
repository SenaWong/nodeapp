/**
 * Created by Edmund Wong on 9/15/2016.
 */
var express = require("express");
var app = express();
var rooms = require("./data/rooms.json");
var bodyParser = require("body-parser");
var uuid = require("uuid");

app.set("views", "./views");
app.set('view engine', 'pug');

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));
app.use(bodyParser.urlencoded( {extended: true}));

app.get('/', function (req, res) {
    res.render("index", { title: "Home"});
});

app.get('/admin/rooms', function (req, res) {
    res.render("rooms", {
        title: "Admin Room",
        rooms: rooms
    });
});

app.get('/admin/rooms/add', function (req, res) {
    res.render("add");
});

app.post('/admin/rooms/add', function (req, res) {

    var room = {
        name: req.body.name,
        id: uuid.v4()
    };

    rooms.push(room);

    res.redirect("/admin/rooms");
});


app.listen(3000, function() {
    console.log('toktok tokkok on port 3000');
});