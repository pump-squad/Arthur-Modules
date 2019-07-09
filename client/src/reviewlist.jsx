import React from 'react';
import Review from './review.jsx';


var ReviewList = (props) =>{
  var { reviewCount, reviews } = props;
  console.log('reviewCount list', reviewCount)
  var updatedList = [];
  for (var i = 0; i < reviewCount; i++){
    updatedList.push(reviews[i]);
  }
  console.log('updated list ', updatedList)
  return (
    <div className='reviewList'>
      {
        updatedList.map((review) => {
          return (
          <Review review={review}/>
          )
        })
      }
    </div>
    )

}

export default ReviewList;