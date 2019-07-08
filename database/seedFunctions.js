// const model = require('./model.js');
const faker = require('faker');
const seedData = require('./seedData.js');

// '' will hold empty values;

//gets random # from 1 5, rounded
var getStarCount = () => {
  var count = Math.round((Math.random() * (1 - 100) + 100));
  if (count < 71) {
    return 5;
  } else if (count < 83) {
    return 4;
  } else if (count < 94) {
    return 3;
  } else if (count < 98) {
    return 2;
  } else {
    return 1;
  }
}
var getTitle = (starCount) => {
  var positive = seedData.titleList.positive;
  var negative = seedData.titleList.negative;

  if (starCount >= 4) {
    var count = Math.floor(Math.random() * positive.length);
    return positive[count];
  } else {
    var count = Math.floor(Math.random() * negative.length);
    return negative[count];
  }
}
//comment function
var createComment = () => {
  var count = Math.round((Math.random() * (1 - 10) + 10));
  if (count < 6) {
    return `${faker.lorem.sentence()} ${faker.lorem.sentence()} ${faker.lorem.sentence()} ${faker.lorem.sentence()} ${faker.lorem.sentence()}`;
  } else if (count < 7) {
    return `${faker.lorem.sentence()} ${faker.lorem.sentence()} ${faker.lorem.sentence()} ${faker.lorem.sentence()} ${faker.lorem.sentence()} ${faker.lorem.sentence()}`;
  } else if (count < 9) {
    return `${faker.lorem.sentence()} ${faker.lorem.sentence()} ${faker.lorem.sentence()} ${faker.lorem.sentence()} ${faker.lorem.sentence()} ${faker.lorem.sentence()} ${faker.lorem.sentence()} ${faker.lorem.sentence()}`;
  } else {
    return `${faker.lorem.sentence()} ${faker.lorem.sentence()} ${faker.lorem.sentence()} ${faker.lorem.sentence()} ${faker.lorem.sentence()} ${faker.lorem.sentence()} ${faker.lorem.sentence()} ${faker.lorem.sentence()} ${faker.lorem.sentence()} ${faker.lorem.sentence()}`;
  }
}

var getActivity = () => {
  var activities = seedData.activityList;
  var randomActivity = () => {
    return activities[Math.floor(Math.random() * activities.length)];
  }
  var count = Math.round((Math.random() * (1 - 10) + 10));
  if (count < 5) {
    //grab 3 activities
    return `${randomActivity()}, ${randomActivity()}, and ${randomActivity()}`;;
  } else if (count >= 5 && count <= 8) {
    //grab 2 activities
    return `${randomActivity()} and ${randomActivity()}`;
  } else {
    //grab 1 activiy
    return randomActivity();
  }
}

//get prosList
var getPros = (starCount) => {
  var pros = seedData.prosList;
  var count = Math.round((Math.random() * (1 - 10) + 10));
  var randomPros = () => {
    return pros[Math.floor(Math.random() * pros.length)];
  }
  //if high star, generate more pros
  if (starCount >= 4) {
    if (count < 6) {
      return `${randomPros()}, ${randomPros()}, ${randomPros()}`;
    } else {
      return `${randomPros()}, ${randomPros()}`;
    }
  } else {
    //if lower stars generate less pros
    if (count > 9) {
      return `${randomPros()}`
    } else {
      return '';
    }
  }
}
//get ConList
var getCons = (starCount) => {
  var cons = seedData.consList;
  var count = Math.round((Math.random() * (1 - 10) + 10));
  var randomCons = () => {
    return cons[Math.floor(Math.random() * cons.length)];
  }
  //if lower star, generate more cons
  if (starCount < 4) {
    if (count < 6) {
      return `${randomCons()}, ${randomCons()}, ${randomCons()}`;
    } else {
      return `${randomCons()}, ${randomCons()}`;
    }
  } else {
    //if higher stars generate less cons
    if (count > 8) {
      return `${randomCons()}`
    } else {
      return '';
    }
  }
}
var getRecommend = (starCount) => {
  var rec = seedData.recommendedList;
  var count = Math.round((Math.random() * (1 - 10) + 10));
  if (starCount => 4) {
    if (count < 6) {
      return rec[0]
    } else {
      return rec[1];
    }
  } else {
    return rec[1];
  }
}

var getHelpful = (starCount) => {
  var helpful = seedData.helpfulList;
  var count = Math.round((Math.random() * (1 - 10) + 10));
  if (starCount => 4) {
    if (count < 6) {
      return helpful[0]
    } else {
      return helpful[1];
    }
  } else {
    return helpful[1];
  }
}

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

var getLanguage = () => {
  var language = seedData.languageList;
  var count = Math.round((Math.random() * (1 - 100) + 100));
  if (count < 85){
    return language[0];
  } else {
    //create new subList without English
    var subList = language.splice(1);
    return subList[Math.floor(Math.random() * subList.length)];
  }
}
//userName random
var createNewUserName = () => {
  return faker.internet.userName();
}
//from random
var createFrom = () => {
  var count = Math.round((Math.random() * (1 - 100) + 100));
  if (count < 61) {
    return `${faker.address.city()}, ${faker.address.state()}`;
  } else if (count < 73) {
    return `${faker.address.city()}`;
  } else if (count < 83) {
    return `${faker.address.country()}`;
  } else if (count < 93) {
    return `${faker.address.state()}`
  } else if (count < 101) {
    return `${faker.address.state()}, ${faker.address.country()}`;
  } else {
    return '';
  }
}
var createAge = () => {
  var age = seedData.ageList;
  var index = Math.floor(Math.random() * age.length);
  return age[index];
}
var createBodyType = () => {
  var body = seedData.bodyTypeList;
  var index = Math.floor(Math.random() * body.length);
  return body[index];
}
var createFit = () => {
  var fit = seedData.fitList;
  var count = Math.round((Math.random() * (1 - 100) + 100));
  if (count < 85) {
    return fit[2];
  } else if (count < 91) {
    return fit[1];
  } else if (count < 96) {
    return fit[3];
  } else if (count < 98) {
    return fit[0];
  } else {
    return fit[4];
  }
}
var createTag = () => {
  var count = Math.round((Math.random() * (1 - 100) + 100));
  var tag = seedData.tagList;
  if (count < 80) {
    return '';
  } else if (count < 85) {
    return tag[3];
  } else if (count < 90) {
    return tag[4];
  } else if (count < 93) {
    return tag[2];
  } else if (count < 96) {
    return tag[1];
  } else {
    return tag[0];
  }
}

module.exports = {
  getStarCount,
  createComment,
  getActivity,
  getLanguage,
  createNewDate,
  createNewUserName,
  createFrom,
  createAge,
  createBodyType,
  createFit,
  createTag,
  //getStarCount dependent
  getTitle,
  getPros,
  getCons,
  getRecommend,
  getHelpful
}