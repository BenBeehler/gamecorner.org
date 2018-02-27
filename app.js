const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

var port = process.env.YOUR_PORT || process.env.PORT || 80;
var host = process.env.YOUR_HOST || '0.0.0.0';

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render("index");
});

app.post('/signup', (req, res) => {
    console.log('New Sign Up!');
    console.log('Username: ' + req.body.username);
    console.log('Password: ' + req.body.password);
    console.log('Email: ' + req.body.email);           //This is a demo, DO NOT KEEP THIS IN A RELEASE
    console.log('');
    res.render('index');
});

app.post('/login', (req, res) => {
    console.log('New Sign in!');
    console.log('Username: ' + req.body.username);
    console.log('Password: ' + req.body.password);         //This is a demo, DO NOT KEEP THIS IN A RELEASE
    console.log('');
    res.render('index');
});

app.get('#', (req, res) => {
    res.render("index");
});

app.get('/home', (req, res) => {
    res.render("index");
});

app.get('/index', (req, res) => {
    res.render("index");
});

app.get('/news', (req, res) => {
    res.render("news");
});

app.get('/about', (req, res) => {
    res.render("about");
});

app.get('/login', (req, res) => {
    res.render("login");
});

app.get('/corners', (req, res) => {
    res.render("corners");
});

app.get('/signup', (req, res) => {
    res.render("signup");
});

app.get('/contact', (req, res) => {
    res.render("contact");
});

app.listen(port, host, () => {
    console.log('Express server listening on %d', port);
});