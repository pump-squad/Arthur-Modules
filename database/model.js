const db = require('./index.js');
const mongoose = require('mongoose');

var reviewSchema =  new mongoose.Schema({
  comment: {
      starCount: String,
      title: String,
      comment: String,
      activity: String,
      pros: String,
      cons: String,
      recommended: String,
      helpful: String,
      date: String,
      language: String
  },
  userInfo: {
    userName: String,
    from: String,
    age: String,
    gender: String,
    bodyType: String,
    fit: String
  },
  tag: {
    top10: String,
    top50: String,
    top500: String,
    enterDraw: String
  }
});

// var person = mongoose.model('')


// module.exports = ReviewModel;

