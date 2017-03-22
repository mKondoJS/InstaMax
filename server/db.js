const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/instaData');

module.exports = db;
