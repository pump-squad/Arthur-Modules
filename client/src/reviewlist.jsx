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
  //store pages
  var pages = [];
  var countDivide = Math.floor(reviewCount/10);
  for (var i = 1; i <= countDivide; i++){
    pages.push(i);
  }
  console.log('pages ', pages)
  return (
    <div className='reviewList'>
      {
        updatedList.map((review, index) => {
          return (
          <Review review={review} key={index}/>
          )
        })
      }
      { 
        pages.map((page, index) => {
          return (
            <li key={index}>{page}</li>
          )
        })
      }
    </div>
    )

}

export default ReviewList;