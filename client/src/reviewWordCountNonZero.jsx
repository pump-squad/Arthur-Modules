import React from 'react';

var ReviewWordCountNonZero = (props) => {
  return (    
    <div className='caption'>
      {console.log('inside nonzero')}
      {console.log(props)}
      <div>
        Minimum required characters left {props.checkReviewLength(props.reviewLength)}
      </div>
    </div>   
  )
}
export default ReviewWordCountNonZero;