const mongoose = require('mongoose');
const db = require('./index.js');

var reviewSchema = new mongoose.Schema({
  id: Number,
  clothingType: String,
  starCount: Number,
  title: String,
  comment: String,
  activity: String,
  pros: String,
  cons: String,
  recommended: String,
  helpful: String,
  date: String,
  language: String,
  subComments: [],
  userName: String,
  from: String,
  age: String,
  gender: String,
  bodyType: String,
  fit: String,
  tag: String
});

// var person = mongoose.model('')
var Review = db.model('Review', reviewSchema);

module.exports = Review;

