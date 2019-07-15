const functions = require('./seedFunctions');
const Review = require('./model.js');
const seedData = require('./seeddata.js')
// Men's Clothing
// Id 0-99 - Jacket
// Id 100-199 Shirt
// Id 200-299 Pants
// Id 300-399 Shorts

// Women's Clothing
// Id 400-499 Jacket
// Id 500-599 Shirt
// Id 600-699 Pants
// Id 700-799 Shorts/Dress

for (var i = 0; i < 800; i++) {
  var stars = functions.getStarCount();
  var clothing;
  var genderT;
  //add diff product categories
  if ((i < 100) || (i > 400 && i < 500)) {
    clothing = 'Jacket';
  } else if ((i > 99 && i < 200) || (i > 499 && i < 600)) {
    clothing = 'Shirt';
  } else if ((i > 199 && i < 300) || (i > 599 && i < 700)) {
    clothing = 'Pants';
  } else if ((i > 299 && i < 400) || (i > 699 && i < 800)) {
    clothing = 'Shorts'
  }
  //male or female
  if (i < 400) {
    genderT = 'Male'
  } else {
    genderT = 'Female'
  }
  var name, image, descrip;
  if (genderT = 'Male'){
    name = seedData.menProductList[clothing].name;
    image = seedData.menProductList[clothing].image;
    descrip = seedData.menProductList[clothing].description;
  } else {
    name = seedData.womenProductList[clothing].name;
    image = seedData.womenProductList[clothing].image;
    descrip = seedData.womenProductList[clothing].description;
  }

  Review.create({
    id: i,
    productName: name,
    productImage: image,
    productDescription: descrip,
    clothingType: clothing,
    starCount: stars,
    title: functions.getTitle(stars),
    comment: functions.createComment(),
    activity: functions.getActivity(),
    pros: functions.getPros(stars),
    cons: functions.getCons(stars),
    recommended: functions.getRecommend(stars),
    helpful: functions.createHelpful(),
    unhelpful: functions.createUnhelpful(),
    date: functions.createNewDate(),
    language: functions.getLanguage(),
    subComments: [],
    userName: functions.createNewUserName(),
    from: functions.createFrom(),
    age: functions.createAge(),
    gender: genderT,
    bodyType: functions.createBodyType(),
    fit: functions.createFit(),
    tag: functions.createTag()
  })
}