import React from 'react';

var Page = (props) => {
  var { value, handlePageChange } = props;
  console.log('page ', value)
  return (
    <div className='page-number' onClick={handlePageChange}>
      {value}
    </div>
  )
}
export default Page;