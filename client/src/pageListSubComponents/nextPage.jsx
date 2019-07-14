import React from 'react';

var NextPage = (props) => {
  return (
    <div>
      <div onClick={()=> props.handleClickNextPage(props.currentPage)} className='page-number'>Next</div>
    </div>
  )
}

export default NextPage;