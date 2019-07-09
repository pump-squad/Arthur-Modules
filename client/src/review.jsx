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
          <div className='review-date'>
            <span>{review.date}</span>
          </div>
        </div>
        <div className='review-body'>
          <div className='review-left'>
            <div>
              <div className='review-text'>
                <span>{review.comment}</span>
              </div>
              <div className='review-activity'>
                <span>{review.activity}</span>
              </div>
            </div>
            <div className='review-pros'>
              {/*Need to conditionally render pros and cons*/}
              <span>Pros: {review.pros}</span>
            </div>
            <div className='review-cons'>
              {/*Need to conditionally render pros and cons*/}
              <span>Cons: {review.cons}</span>
            </div>
            <div className='review.recommend'>
              <span>{/*CheckMark*/}Yes, I recommend this product/</span>
            </div>
          </div>
          <div className='review-right'>
            <div className='review-userName'>
              <span>{review.userName}</span>
            </div>
            <div className='review-age'>
              <span>Age: {review.age}</span>
            </div>
            <div className='review-gender'>
              <span>Gender: {review.gender}</span>
            </div>
            <div className='review-bodyType'>
              <span>Body Type: {review.bodyType}</span>
            </div>
            <div className='review-fit'>
              <span>Fit: {/*use review.fit for image*/}{review.fit}</span>
            </div>
          </div>
        </div>
        <div className='review-footer'>
          <div className='review-postComment'>
            <span>{/*Post Comment Icon*/} Post Comment</span>
          </div>
          <div>
            <div className='review-helpful'>
              {/*put uhelpful thumbs up*/}
              <span className='review-helpful_image'></span>
              <span>helpful</span>
              <span>{review.helpful}</span>
            </div>
            <div className='review-unhelpful'>
              {/*put unhelpful thumbs down*/}
              <span className='review-unhelpful_image'></span>
              <span>unhelpful</span>
              <span>{review.unhelpful}</span>
            </div>
            <div></div>
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