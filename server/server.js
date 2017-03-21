const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const instaController = require('./controllers/instaController');
const db = require('./db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log('dirname path', __dirname); //In the server.js file
app.use('/styles', express.static(path.join(__dirname, '../client/src/css')));
app.use('/img', express.static(path.join(__dirname, '../client/src/assets/img')));

app.get('*.js', function (req, res) {
  res.sendFile(path.join(__dirname + './../dist/build.js'));
});

app.get('/instaData', instaController.getImages, (req, res) => {
  res.status(200).json(res.locals.images);
});

app.get('/description', instaController.getPossibleWords, (req, res) => {
  res.status(200).json(res.description);
})

// return index.html in all other cases in order to facilitate
// vue router handling page transitions
app.get('*', function (req, res) {
  console.log('returning index.html')
  res.sendFile(path.resolve(__dirname, '../index.html'));


app.listen(8080, () => console.log('The server is listening on port 8080'));