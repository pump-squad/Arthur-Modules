const mongoose = require('mongoose');
const db = require('./index.js');

var reviewSchema = new mongoose.Schema({
  id: Number,
  productName: String,
  productImage: String,
  productDescription: String,
  clothingType: String,
  starCount: Number,
  title: String,
  comment: String,
  activity: String,
  pros: String,
  cons: String,
  recommended: String,
  helpful: Number,
  unhelpful: Number,
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
