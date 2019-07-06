const functions = require('./seedFunctions');
const Review = require('./model.js');

for (var i = 0; i < 100; i++){
  var stars = functions.getStarCount();
  Review.create({
    comment: {
      id: i,
      starCount: stars,
      title: functions.getTitle(stars),
      comment: functions.createComment(),
      activity: functions.getActivity(),
      pros: functions.getPros(stars),
      cons: functions.getCons(stars),
      recommend: functions.getRecommend(stars),
      helpful: functions.getHelpful(stars),
      date: functions.createNewDate(),
      language: functions.getLanguage(),
      subComments: []
    },
    userInfo: {
      userName: functions.createNewUserName(),
      from: functions.createFrom(),
      age: functions.createAge(),
      gender: functions.createGender(),
      bodyType: functions.createBodyType(),
      fit: functions.createFit(),
      tag: functions.createTag()
    }
  })
}
