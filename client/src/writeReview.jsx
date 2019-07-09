import React from 'react';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className='write-review'>
        <div className='write-review_header'>
          <div className='write-review_header_title'>
            <span>Write Your Review</span>
          </div>
          <div className='write-review_header_image'>
            <div className='write-review_product_name'>
              <span>{}</span>
            </div>
            <div className='write-review_product_descrip'>
              <span>{}</span>
            </div>
          </div>
        </div>
        <form className='review-form'>
          <div className='review-rating'>
            <div className='review-rating_header'>
              <div className='review-header_title'>
                <span>Give It A Rating</span>
              </div>
              <div className='required'>
                <span>*</span>
                <span>required</span>
              </div>
            </div>
            <div className='review-rating_body'>
              <div className='review-rating_stars'>
                <span>Overall Rating</span>
                {/*Put in star image*/}
                <span>*</span>
                <span>S</span>
                <span>S</span>
                <span>S</span>
                <span>S</span>
                <span>S</span>
              </div>
              <div className='review-rating_recommend'>
                <span>I Recommend It</span>
                <span>*</span>
                <span>
                  <input type='radio'></input>
                  <label>Yes</label>
                </span>
                <span>
                  <input type='radio'></input>
                  <label>No</label>
                </span>
              </div>
              <div className='review-rating_fits'>
                <span>
                  <input type='radio'></input>
                  <label>Fits Very Small</label>
                </span>
                <span>
                  <input type='radio'></input>
                  <label>Fits Small</label>
                </span>
                <span>
                  <input type='radio'></input>
                  <label>True to Size</label>
                </span>
                <span>
                  <input type='radio'></input>
                  <label>Fits Large</label>
                </span>
                <span>
                  <input type='radio'></input>
                  <label>Fits Very Large</label>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default WriteReview;