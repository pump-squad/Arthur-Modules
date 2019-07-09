import React from 'react';

var Review = (props) => {
  var { review } = props;
  console.log('Review inside review ', review)
  return (
  <div className='review'>
    <div className='review-star_img'> 
    Stars {/*Image source here*/}
    </div>
    <div className='review-title'>
      <span></span>
    </div>
  </div>
  )
}

export default Review;