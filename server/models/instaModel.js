const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const instaSchema = new Schema({
  description: String,
  url: String,
});

const InstaData = mongoose.model('instaData', instaSchema);

module.exports = InstaData;
