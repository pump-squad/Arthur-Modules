import React from 'react';

var MediaGuidelines = (props) => {
  return (
    <div className='i-container-m-r'>
      <div className='i-container-m'>
      <div className='media-guidelines-header'>
        <div className='media-guidelines-header-image'>I</div>
        <div className='media-guidelines-header-title'>Media guidelines</div>
        <div className='media-guidelines-header-x' onClick={props.clickedIMediaX}>x</div>
      </div>
      <p className='media-guidelines-title'>
        We want to publish your review, so please:
      </p>  
      <div className='i-container-w-list'>
        <li>upload media related to the product</li>
        <li>confirm you hold the copyright for the media</li>
        <li>images must be at least 533 pixels in width and height</li>
      </div>    
    </div>
    </div>
  )
}

export default MediaGuidelines;