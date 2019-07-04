const model = require('./model.js');
const faker = require('faker');



//gets random # from 0 5, rounded
function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

//title


//comment


//activity - pick from list
var activityList = ['Urban', 'Daily Commute to Work', 'Hiking', 'Dog Walking', 'Mountaineering', 'Climbing', 'Snowboarding', 'Camping'];


//pros

//cons

//recommended //yes or no
var recommendedList = ['yes', 'no'];
//helpful // yes or no
var helpfulList = ['yes', 'no'];
//data faker.date.between
var fakeDate = faker.date.between('2001-01-01', '2019-07-05');
for (var i = 0; i < 15; i++){
  console.log('Date ', fakeDate)
}


//language (mostly in english, will have a few diff languages)

//userName random

//from random

//age
var ageList = ['Under 18', '18-24', '25-34', '35-44', '45-54', '55-64', 'Over 65'];
//gender
var genderList = ['Male', 'Female'];
//body type
var bodyTypeList = ['Petite', 'Lean', 'Slim', 'Athletic', 'Solid', 'Curvy'];
//fit
var fitList = ['Fits Very Small', 'Fits Small', 'True to Size', 'Fits Large', 'Fits Very Large'];
