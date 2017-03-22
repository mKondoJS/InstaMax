const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const instaController = require('./controllers/instaController');
const db = require('./db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/styles', express.static(path.join(__dirname, '../client/src/css')));
app.use('/img', express.static(path.join(__dirname, '../client/src/assets/img')));

app.get('*.js', (req, res) => {
  res.sendFile(path.join(__dirname, './../dist/build.js'));
});

app.get('/instaData', instaController.getImages, (req, res) => {
  res.status(200).json(res.locals.images);
});

app.get('/instaData/:description', instaController.getImages, (req, res) => {
  res.status(200).json(res.locals.images);
});

app.post('/description', instaController.getPossibleWords, (req, res) => {
  res.status(200).json(res.locals.description);
});

// return index.html in all other cases in order to facilitate
// vue router handling page transitions
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.listen(8080, () => console.log('The server is listening on port 8080'));
