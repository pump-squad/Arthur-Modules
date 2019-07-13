import React from 'react';

var WritingGuidelines = (props) => {
  return (
    <div className='i-container-w-r'>
    <div className='i-container-w'>
      <div className='writing-guidelines-header'>
        <div className='writing-guidelines-header-container'>
        <div className='writing-guidelines-header-image'>I</div>
        <div className='writing-guidelines-header-title'>Writing guidelines</div>
        <div className='writing-guidelines-header-x' onClick={props.clickedIReviewX}>x</div>
        </div>
      </div>
      <p className='writing-guidelines-title'>
        We want to publish your review, so please:
      </p>
      <div className='i-container-w-list'>
        <li>keep your review focused on the product</li>
        <li>avoid writing about customer service <span> </span>
          <a href="http://www.arcteryx.com/Service-Forms.aspx?EN" target="_blank" className='contact-us'>contact us</a>
          <span> </span>
          us instead if you have issues requiring immediate attention</li>
        <li>refrain from mentioning competitors or the specific price you paid for the product</li>
        <li>do not include any personally identifiable information, such as full names</li>
      </div>
    </div>
    </div>
  )
}

export default WritingGuidelines;