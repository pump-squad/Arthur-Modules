const model = require('./model.js');
const faker = require('faker');
const seedData = require('./seeddata.js')


//gets random # from 1 5, rounded
var getStarCount = () => {
  var count = Math.round((Math.random() * (1 - 100) + 100));
  if (count < 71){
    return 5;
  } else if (count < 83){
    return 4;
  } else if (count < 94){
    return 3;
  } else if (count < 98){
    return 2;
  } else {
    return 1;
  }
}
var getTitle = (starCount) => {
  var positive = seedData.titleList.positive;
  var negative = seedData.titleList.negative;

  if (starCount >= 4){
    var count = Math.floor(Math.random() * positive.length);
    return positive[count];
  } else {
    var count = Math.floor(Math.random() * negative.length);
    return negative[count];
  }
}
//comment function

var getActivity = () => {
  var activities = seedData.activityList;
  var randomActivity = () => {
    return activities[Math.floor(Math.random() * activities.length)];
  }
  var count = Math.round((Math.random() * (1 - 10) + 10));
  if (count < 5){
    //grab 3 activities
    return `${randomActivity()}, ${randomActivity()}, and ${randomActivity()}`;; 
  } else if (count >= 5 && count <= 8){
    //grab 2 activities
    return `${randomActivity()} and ${randomActivity()}`; 
  } else {
    //grab 1 activiy
    return randomActivity();
  }
}
//get prosList



//get ConList


var createNewDate = () => {
  var date = faker.date.between('2001-01-01', '2019-07-05')
  //split up date and grab first part of date: year, month, day info
  var newDate = JSON.stringify(date).slice(1, 11);
  //holds an array of Year, Month, Day
  newDate = newDate.split('-');
  var newDate = {
    'year': newDate[0],
    'month': newDate[1],
    'day': newDate[2]
  }
  var months = {
    '01': 'January', '02': 'February', '03': 'March', '04': 'April',
    '05': 'May', '06': 'June', '07': 'July', '08': 'August', '09': 'September',
    '10': 'October', '11': 'November', '12': 'December'
  }
  //grab month in newDate
  var dayInNewDate = newDate.day;
  if (dayInNewDate[0] === '0') {
    //replace with empty string
    dayInNewDate = dayInNewDate.replace('0', '');
    newDate.day = dayInNewDate;
  }
  var finalNewDate = `${months[newDate.month]} ${newDate.day}, ${newDate.year}`
  return finalNewDate;
}

//language (mostly in english, will have a few diff languages)

//userName random
var createNewUserName = () => {
  return faker.internet.userName();
}
console.log(createNewUserName());
//from random
var createFrom = () => {

}
