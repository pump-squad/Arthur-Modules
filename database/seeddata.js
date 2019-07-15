//Comments Section in Schrema
//product info
var menProductList = {
  'Jacket':
  {
    name: "Epsilon Jacket Men's", 
    image: "",
    description: "Versatile clothing for trekking and hiking with comfortable waterproof breathable protection features."
  },
  'Pants':
  {
    name: "Delta Pants Men's",
    image: "",
    description: "Lightweight, multi-purpose, and durable softshell pants designed for a range of outdoor activities"
  },
  'Shirt':
  {
    name: "Beta Shirt Men's",
    image: "",
    description: "Lightweight, durable softshell pants designed for a range of outdoor activities"
  },
  'Shorts':
  {
    name: "Gamma Shorts Men's",
    image: "",
    description: "Comfy and strecthable pants for any occasion. Provides ample pocket space"
  }
}
var womenProductList = {
  'Jacket':
  {
    name: "Sigma Jacket Women's",
    image: "",
    description: "Versatile clothing for trekking and hiking with comfortable waterproof breathable protection features."
  },
  'Shirt':
  {
    name: "Capricon Shirt Women's",
    image: "",
    description: "Lightweight, multi-purpose, and durable softshell pants designed for a range of outdoor activities"
  },
  'Pants':
  {
    name: "Pices Pants Women's",
    image: "",
    description: "Lightweight, durable softshell pants designed for a range of outdoor activities"
  },
  'Shorts':
  {
    name: "Leo Shorts Women's",
    image: "",
    description: "Versatile clothing for trekking and hiking with comfortable waterproof breathable protection features."
  }
}
//title
var titleList = {
  positive:
    ['Just amazing', 'Simply the best', 'Amazing quality', 'Excellent Craftmanship',
      'Excellent', 'Great Fit', 'Looks Great', 'Great Purchase',
      'Best Piece of Clothing I Own', 'Versatile', 'Love this', 'Love it!',
      'Very versatile', 'Using it everyday', 'Very comfy', 'Worth the money!',
      'Just what I was looking for', 'Awesome Product', 'So lightweight and functional', 'Love them',
      'Great for all activities', 'Fantastic Purchase', 'New Favorite Item', 'Fantastic Fit'],
  negative:
    ['Too Large', 'Shrinks in Wash', 'Lacks Durability', 'Too Thin',
      'What a shame', 'Unfortunately not good', 'Stains and rips easily', 'Disappointed',
      'Wish I liked it', 'Doesnt work', 'Disappointed', 'Not durable',
      'Poor Quality', 'Too fragile', 'Not as advertised', 'Questionable Durability',
      'Poor Design', 'Poor Insulation', 'Not comfortable', 'Low Quality']
}
//comment

//activity - pick from list //Rigourous Coding in Array*
var activityList =
  ['Urban', 'Daily commute to work', 'Hiking', 'Dog walking',
    'Mountaineering', 'Climbing', 'Snowboarding', 'Camping',
    'Backpacking', 'Bouldering', 'Running', 'Biking',
    'Casual Wear', 'Outdoor Activities', 'Traveling', 'Urban Trekking',
    'Parkour', 'Climbing', 'Rigourous Coding', 'Galvanting'];
//pros
var prosList =
  ['quality', 'lightweight', 'versatile', 'breathable',
    'comfy', 'soft', 'stylish', 'durable',
    'windproof', 'stretchy', 'solid', 'long lasting',
    'fits like a glove', 'stays dry', 'perfect fit', 'quick drying'];
//cons
var consList =
  ['not fully waterproof', 'overpriced', 'lack of color choices', 'lack of adequate sizes',
    'uncomfortable', 'not durable', 'itchy', , 'not comfy',
    'subpar stitching', 'fades easily', 'runs too small', 'fabric pilling',
    'weak fabric', 'bad customer service', 'poor design', 'price',
    'not many color choices', 'too big', 'falling apart', 'not long lasting'];
//recommended //yes or no
var recommendedList = ['yes', 'no'];

var languageList =
  ['English', 'German', 'Danish', 'Spanish',
    'French', 'Italian', 'Japanese', 'Norwegian',
    'Swedish', 'Chinese'];
//age
var ageList = ['Under 18', '18-24', '25-34', '35-44', '45-54', '55-64', 'Over 65'];
//body type
var bodyTypeList = ['Petite', 'Lean', 'Slim', 'Athletic', 'Solid', 'Curvy'];
//fit
var fitList = ['Fits Very Small', 'Fits Small', 'True to Size', 'Fits Large', 'Fits Very Large'];

var tagList = ['Top10', 'Top50', 'Top100', 'Top500', 'EnterDraw'];

module.exports = {
  menProductList,
  womenProductList,
  titleList,
  activityList,
  prosList,
  consList,
  recommendedList,
  languageList,
  ageList,
  bodyTypeList,
  fitList,
  tagList
}