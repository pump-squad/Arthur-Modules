const Review = require('../database/model.js');

const category = {
  jacket:
    ['jacket', 'hoody', 'vest', 'coat',
      'parka', 'zip', 'sweater'],
  shirt:
    ['crew', 'henley', 'shirt', 'tank',
      'top'],
  pants:
    ['pant', 'bib', 'tight', 'knicker',
      'bottom'],
  shorts:
    ['boxer', 'short', 'skort', 'dress']
}

//idChecker function
var idChecker = (id) => {
  if ((id < 100) || (id > 400 && id < 500)) {
    return 'Jacket';
  } else if ((id > 99 && id < 200) || (id > 499 && id < 600)) {
    return 'Shirt';
  } else if ((id > 199 && id < 300) || (id > 599 && id < 700)) {
    return 'Pants';
  } else if ((id > 299 && id < 400) || (id > 699 && id < 800)) {
    return 'Shorts';
  }
}

var idOrProductChecker = (input) => {
  //if input is a product name
  var clothingCategory;
  if (Number.isNaN(Number(input))) {
    //need to find what item category name is under
    var keys = Object.keys(category);
    for (var i = 0; i < keys.length; i++) {
      if (category[keys[i]].indexOf(input) !== -1) {
        clothingCategory = keys[i];
      }
    }
  } else {
    var input = Number(input);
    //UpperCase first Letter
    clothingCategory = idChecker(input);
  }
  clothingCategory = clothingCategory[0].toUpperCase() + clothingCategory.slice(1);
  return clothingCategory;
}

var capitalizeGender = (input) => {
  return input[0].toUpperCase() + input.slice(1);
}

const getReviews = (name, gender, callback) => {
  Review.find({ 'clothingType': `${idOrProductChecker(name)}`, 'gender': `${capitalizeGender(gender)}` })
    .then((data) => {
      callback(null, data)
    })
    .catch((err) => {
      callback(err, null)
    })
};
// // console.log(idOrProductChecker('henley'))
// // console.log(idOrProductChecker('skort'))
// // console.log(idOrProductChecker('parka'))
// // console.log(idOrProductChecker('bib'))
// console.log(idOrProductChecker(55))
// console.log(idOrProductChecker(200))
// console.log(idOrProductChecker(500))
// console.log(idOrProductChecker(700))
module.exports = { getReviews };