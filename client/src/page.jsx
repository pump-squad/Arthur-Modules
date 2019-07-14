import React from 'react';

var Page = (props) => {
  var { value, handlePageChange, currentPage} = props;
  console.log('page ', value)
  if (value === currentPage){
    return (
      <div className='page-number page-number-clicked' onClick={handlePageChange}>
        {value}
      </div>
    )
  } else {
    return (
      <div className='page-number' onClick={handlePageChange}>
        {value}
      </div>
    )    
  }
}
export default Page;