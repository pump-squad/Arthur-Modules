import React from 'react';

var Review = (props) => {
  var { review } = props;
  console.log('Review inside review ', review)
  // console.log(typeof(review) === )
  if (typeof (review) !== 'undefined') {
    return (
      <div className='review'>
        <div className='review-star_img'>
          Stars {/*Image source here*/}
          {review.starCount}
        </div>
        <div className='review-header'>
          <div className='review-title'>
            <span>{review.title}</span>
          </div>
          <div className='review-date'>{review.date}</div>
        </div>
        <div className='review-body'>
          <div className='review-container'>
              <div className='review-left'>
                <div className='review-text'>
                  <span>{review.comment}</span>
                </div>
                <div className='review-activity'>
                  <span className='activity-actual'>
                    <span className='word-activity'>Activity: </span>
                    <span>{review.activity}</span>
                  </span>
                </div>
                <div className='review-pros'>
                  <span>
                    <span className='pros-actual'>Pros: </span>
                    <span>{review.pros}</span>
                  </span>
                </div>
                <div className='review-cons'>
                  <span>
                    <span className='cons-actual'>Cons: </span>
                    <span>{review.cons}</span>
                  </span>
                </div>
                <div className='review-recommend'>
                  <span>{'C'}Yes, I recommend this product</span>
                </div>
              </div>
              <div className='review-right'>
                <div className='review-userName'>
                  <span>{review.userName}</span>
                </div>
                <div>
                  <span>From: <span className='review-from'>{review.from}</span>
                  </span>
                </div>
                <div>
                  <span>Age: <span className='review-age'>{review.age}</span>
                  </span>
                </div>
                <div>
                  <span>Gender: <span className='review-gender'>{review.gender}</span>
                  </span>
                </div>
                <div>
                  <span>Body Type: <span className='review-bodyType'>{review.bodyType}</span>
                  </span>
                </div>
                <div>
                  <span className='review-fitrating-fit-container'>
                    <div className='review-fitrating-fit-label'>Fit: </div>
                    <div className='review-fitrating-slider-label1'> Fits Small</div>
                    <div className='review-fitrating-slider-image'>{review.fit}</div>
                    <div className='review-fitrating-slider-label2'> Fits Large</div>
                  </span>
                </div>
              </div>
          </div>
          <div className='review-footer'>
            <div className='review-postComment'>
              <span>{/*Post Comment Icon*/} Post Comment</span>
            </div>
            <div className='review-helpful-unhelpful'>
              <div className='review-helpful'>
                {/*put uhelpful thumbs up*/}
                <span className='review-helpful-image'></span>
                <span>helpful</span>
                <span className='review-helpful-number'>{review.helpful}</span>
              </div>
              <div className='review-unhelpful'>
                {/*put unhelpful thumbs down*/}
                <span className='review-unhelpful_image'></span>
                <span>unhelpful</span>
                <span className='review-unhelpful-number'>{review.unhelpful}</span>
              </div>
            </div>
            <div className='line-divider'></div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>Unrendered</div>
    )
  }
}

export default Review;