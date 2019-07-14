import React from 'react';

var PreviousPage = (props) => {
  return (
    <div>
      <div onClick={()=> props.handleClickPreviousPage(props.currentPage)} className='page-number'>Previous</div>
    </div>
  )
}

export default PreviousPage;