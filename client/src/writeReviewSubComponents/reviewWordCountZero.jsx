import React from 'react';

var ReviewWordCountZero = (props) => {
  return (    
    <div className='caption'>
      {console.log('inside zero')}
      <div>
        You must write at least 50 characters for this field.
      </div>
      <div>
        Minimum required characters left {props.checkReviewLength(props.reviewLength)}
      </div>
    </div>   
  )
}
export default ReviewWordCountZero;