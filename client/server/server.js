const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const instaController = require('./instaController');
const db = require('./db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


console.log('dirname path', __dirname); //In the server.js file
app.use(express.static(path.join(__dirname, '../../index.html')));
app.use(express.static(path.join(__dirname, './../../dist')));
app.use('/styles', express.static(path.join(__dirname, './../src/css')));
// app.use('/img', express.static(path.join(__dirname, '../src/assets')));
// app.use('../client/src/assets/img', express.static(path.join(__dirname, '../src/assets')));

app.get('*.js', function(req, res) {
  res.sendFile(path.join(__dirname + './../../dist/build.js'));
})

// app.get('*.css', function(req, res) {
//   res.sendFile(path.join(__dirname + './../src/css/login.css'));
// })
// app.get('*.css', function(req, res) {
//   res.sendFile(path.join(__dirname + './../src/css/style.css'));
// })

app.get('/', function(req, res) {
  console.log('in the sendfile');
  res.sendFile(path.join(__dirname + './../../index.html'));
});

app.get('/instaData', (req, res) => {
  return InstaData.findAll({}, (err, data) => {
    if (err) res.send(500);
    res.json(data);
  })
})

app.post('instaData', instaController.addData, (req, res) => {
  res.send(res.data);
})

app.listen(8080, () => console.log('The server is listening on port 8080'));