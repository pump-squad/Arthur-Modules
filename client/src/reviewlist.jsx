import React from 'react';
import Review from './review.jsx';


var ReviewList = (props) => {
  console.log('INside RList ', props.clickWriteReview)
  var { reviewCount, reviews } = props;
  console.log('reviewCount list', reviewCount)
  var updatedList = [];
  for (var i = 0; i < reviewCount; i++) {
    updatedList.push(reviews[i]);
  }
  console.log('updated list ', updatedList)
  //store pages
  var pages = [];
  var countDivide = Math.floor(reviewCount / 10);
  for (var i = 1; i <= countDivide; i++) {
    pages.push(i);
  }
  console.log('pages ', pages)
  return (
    <div>
      <div className='ratings-summary'>
        <div className='ratings-summary_title'>
          <h4>Ratings Summary</h4>
        </div>
        <div>
          {/*holds image of stars*/}
          <img></img>
        </div>
        <div className='fitrating-slider'>
          <div className='fitrating-slider_header'>
            Fit:
          </div>
          <div className='fitrating-slider_label1'>
            Fits Small
          </div>
          <div className='fitrating-slider_image'>
            <img></img>
          </div>
          <div className='fitrating-slider_label2'>
            Fits Large
          </div>
        </div>
      </div>
      <div className='write-review'>
        <span id='write-review_button'>
          <button onClick={props.clickWriteReview}>WRITE A REVIEW</button>
        </span>
        <span id='write-review_sort_by'>
          <select>
            <option>Sort by</option>
            <option>Newest</option>
            <option>Oldest</option>
            <option>Highest Rating</option>
            <option>Lowest Rating</option>
            <option>Most helpful</option>
            <option>Staff Reviews</option>
            <option>Top Contributors</option>
          </select>
        </span>
      </div>
      <div className='reviewList'>
        {
          updatedList.map((review, index) => {
            return (
              <Review review={review} key={index} />
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
    </div>
  )

}

export default ReviewList;