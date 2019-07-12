import React from 'react';
import ReviewWordCountZero from './reviewWordCountZero.jsx';
import ReviewWordCountNonZero from './reviewWordCountNonZero.jsx';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewLength: '',
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.checkReviewLength = this.checkReviewLength.bind(this);
    // this.checkReviewWordLength = this.checkReviewWordLength.bind(this);
  }
  handleChange(event) {
    this.setState({
      reviewLength: event.target.value.length
    }, console.log('review count ', event.target.value.length))
    this.setState({ value: event.target.value });
  }
  checkReviewLength(length) {
    return 50 - length;
  }
  // checkReviewWordLength() {
  //   if (this.state.reviewLength === '') {
  //     return <ReviewWordCountZero checkReviewLength={this.checkReviewLength} reviewLength={this.state.reviewLength} />
  //   } else {
  //     return <ReviewWordCountNonZero checkReviewLength={this.checkReviewLength} reviewLength={this.state.reviewLength} />
  //   }
  // }

  render() {

    var reviewWordComponent;
    if (this.state.value.length === 0) {
      reviewWordComponent = <ReviewWordCountZero checkReviewLength={this.checkReviewLength} reviewLength={this.state.reviewLength} />
    } else {
      reviewWordComponent = <ReviewWordCountNonZero checkReviewLength={this.checkReviewLength} reviewLength={this.state.reviewLength} />
    }

    return (
      <div className='write-review'>
        <div className='write-review-header'>
          <div className='write-review-header-title'>
            <span>Write Your Review</span>
          </div>
          <div className='write-review-header-product-info'>
            <div className='write-review-header-product-left'>
              <div className='write-review-header-product-image'>
                'Image'
              </div>
            </div>
            <div className='write-review-header-product-right'>
              <div className='write-review-product-name'>
                <span>Beta AR Jacket Men's</span>
              </div>
              <div className='write-review-product-descrip'>
                <span>Lightweight and packable, waterproof GORE-TEX Pro jacket; hip length with a helmet compatible DropHood™. Beta Series: All round mountain apparel | AR: All Round.</span>
              </div>
            </div>
          </div>
        </div>
        <div className='line-divider'></div>
        <form className='review-form'>
          <div className='review-form-rating'>
            <div className='review-form-rating-header'>
              <span className='review-form-header-title'>
                Give It A Rating
                  </span>
              <div className='review-form-rating-header-required'>
                <div className='big-asterisk-left'></div>
                <div className='big-asterisk'>*required</div>
              </div>
            </div>
            <div className='review-form-rating-body'>
              <div className='review-form-rating-stars'>
                <div className='review-form-rating-left'>
                  <div className='overall-rating'>Overall Rating
                    <span className='asterisk'>*</span></div>
                </div>
                <div className='overall-star-container'>
                  {/*Put in star image*/}
                  <span>S</span>
                  <span>S</span>
                  <span>S</span>
                  <span>S</span>
                  <span>S</span>
                </div>
              </div>
              <div className='review-form-rating-recommend'>
                <div className='recommend-container'>
                  <div className='i-recommend'>I Recommend It
                  <span className='asterisk'>*</span></div>
                  <div className='recommend-radio-container'>
                    <span>
                      <input type='radio'></input>
                      <label className='review-form-rating-recommend-yes small'>Yes</label>
                    </span>
                    <span className='no-container'>
                      <input type='radio'></input>
                      <label className='review-form-rating-recommend-no small'>No</label>
                    </span>
                  </div>
                </div>
              </div>
              <div className='review-form-rating-fits'>
                <div className='review-fits'>Fits</div>
                <div className='fits-radio'>
                  <div className='rating-radio'>
                    <input type='radio'></input>
                    <label className='recommend-fit-very-small small'>Fits Very Small</label>
                  </div>
                  <div className='radio-gray'></div>
                  <div className='rating-radio'>
                    <input type='radio'></input>
                    <label className='recommend-fit-small small'>Fits Small</label>
                  </div>
                  <div className='radio-gray'></div>
                  <div className='rating-radio'>
                    <input type='radio'></input>
                    <label className='recommend-fit-true small'>True to Size</label>
                  </div>
                  <div className='radio-gray'></div>
                  <div className='rating-radio'>
                    <input type='radio'></input>
                    <label className='recommend-fit-large small'>Fits Large</label>
                  </div>
                  <div className='radio-gray'></div>
                  <div className='rating-radio'>
                    <input type='radio'></input>
                    <label className='recommend-fit-very-large small'>Fits Very Large</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='line-divider'></div>
          <div className='review-form-tell-us'>
            <div className='review-form-tell-us-title'>
              Tell Us What You Think
            </div>
            <div className='review-form-title'>
              <div className='review-title'>Review Title<span className='asterisk'>*</span>
              </div>
              <span className='title-input-wrapper'>
                <input className='input-small' type='text' maxLength="150"></input>
              </span>
            </div>
            <div className='caption'>Example: This product has great features</div>
            <div className='container'>
              <div className='title'>Pros</div>
              <span className='title-input-wrapper'>
                <input className='input-small' type='text' maxLength="50"></input>
              </span>
            </div>
            <div className='caption'>(120 character maximum) Example: durable, lightweight, versatile</div>
            <div className='container'>
              <div className='title'>Cons</div>
              <span className='title-input-wrapper'>
                <input className='input-small' type='text' maxLength="50"></input>
              </span>
            </div>
            <div className='caption'>
              (120 character maximum) Example: cumbersome, flimsy, inefficient
              </div>
            <div className='review-form-review'>
              <div className='review-title'>Your Review<span className='asterisk'>*</span>
              </div>
              <span className='title-input-wrapper'>
                <textarea type='text' rows='10' cols='25' onChange={this.handleChange}></textarea>
              </span>
              {reviewWordComponent}
            </div>
            <div className='container'>
              <div className='title'>Activity</div>
              <span className='title-input-wrapper'>
                <input className='input-small' type='text' maxLength="50"></input>
              </span>
              <div className='caption'>
                What activity do you primarily use this product for?
              </div>
            </div>
          </div>
          <div className='line-divider'></div>
          <div className='review-form-share'>
            <div className='review-form-share-title'>
              Share Photos & Video
            </div>
            <div className='container'>
              <div className='title'>Upload Your Images</div>
              <span className='title-input-wrapper'>
                <div>
                  <button>Choose File</button>
                  <label></label>
                </div>
              </span>
              <div className='caption'>6 image max, 5mb max per image</div>
            </div>
            <div className='review-form-vid-link'>
              <div className='title'>Link To Your Video</div>
              <span className='title-input-wrapper'>
                <input className='input-small' type='text' maxLength="1024"></input>
              </span>
              <div className='caption'>Paste the URL from your videos on <a href="http://www.youtube.com/" className="youtube" target="_blank">YouTube</a>.
              </div>
            </div>
            <div className='container'>
              <div className='title'>Video Caption</div>
              <span className='title-input-wrapper'>
                <input className='input-small' type='text' maxLength="255"></input>
              </span>
              <div className='caption'>
                Example: My demonstration of how to use this product
                </div>
            </div>
          </div>
          <div className='line-divider'></div>
          <div className='review-form-about-you'>
            <div className='review-form-about-you-title'>About You</div>
            <div className='container'>
              <div className='review-title'>Choose A Nickname<span className='asterisk'>*</span>
              </div>
              <span className='title-input-wrapper'>
                <input className='input-small' type='text' maxLength="25"></input>
              </span>
              <div className='caption'>Example: Jackie27. For privacy reasons, do not use your full name or email address.</div>
            </div>
            <div className='container'>
              <div className='title'>Where Are You Located?</div>
              <span className='title-input-wrapper'>
                <input className='input-small' type='text' maxLength="200"></input>
              </span>
              <div className='caption'>Example: Vancouver, BC</div>
            </div>
            <div className='container'>
              <div className='review-title'>Your Age</div>
              <span className='title-input-wrapper'>
                <select>
                  <option></option>
                  <option value="Under18">Under 18</option>
                  <option value="18to24">18-24</option>
                  <option value="25to34">25-34</option>
                  <option value="35to44">35-44</option>
                  <option value="45to54">45-54</option>
                  <option value="55to64">55-64</option>
                  <option value="Over65">Over 65</option>
                </select>
              </span>
            </div>
            <div className='container'>
              <div className='review-title'>Your Gender</div>
              <div className='rating-radio-gender'>
                <input type='radio'></input>
                <label className='gender-male small'>Male</label>
              </div>
              <div className='radio-gray'></div>
              <div className='rating-radio-gender'>
                <input type='radio'></input>
                <label className='gender-female small'>Female</label>
              </div>
            </div>
            <div className='container'>
              <div className='review-title'>Your Body Type</div>
              <div className='fits-radio'>
                <div className='rating-radio'>
                  <input type='radio'></input>
                  <label className='body-type-petite small'>Petite</label>
                </div>
                <div className='radio-gray'></div>
                <div className='rating-radio'>
                  <input type='radio'></input>
                  <label className='body-type-lean small'>Lean</label>
                </div>
                <div className='radio-gray'></div>
                <div className='rating-radio'>
                  <input type='radio'></input>
                  <label className='body-type-slim small'>Slim</label>
                </div>
                <div className='radio-gray'></div>
                <div className='rating-radio'>
                  <input type='radio'></input>
                  <label className='body-type-athletic small'>Athletic</label>
                </div>
                <div className='radio-gray'></div>
                <div className='rating-radio'>
                  <input type='radio'></input>
                  <label className='body-type-solid small'>Solid</label>
                </div>
                <div className='rating-radio'>
                  <input type='radio'></input>
                  <label className='body-type-curvy small'>Curvy</label>
                </div>
              </div>
            </div>

            <div className='review-form-send-email'>
              <span className='title-input-wrapper'>
                <input type='checkbox'></input>
              </span>
              <label>Please send me an email when my review is posted or commented on.</label>
            </div>
            <div className='review-form-email'>
              <label>Your Email<span className='asterisk'>*</span></label>
              <span className='title-input-wrapper'>
                <input className='input-small' type='text' maxLength="255"></input>
              </span>
              <div className='caption'>We will ONLY use your email to notify you in regards to your submission.</div>
            </div>
          </div>
          <div className='line-divider'></div>
          <div className='review-form-footer'>
            <div className='review-form-send-email'>
              <span className='title-input-wrapper'>
                <input type='checkbox'></input>
              </span>
              <label><span>By submitting this review you agree to our <a href='https://arcteryx.ugc.bazaarvoice.com/content/7059-en/termsandconditions.htm'>Terms & Conditions.</a><span className="asterisk">*</span></span></label>
            </div>
            <div className='review-form-submit'>
              <span>
                <button className='submit-button'>Submit</button>
              </span>
              <span>
                <button className='cancel-button'>Cancel</button>
              </span>
              <span>
                <button className='preview-your-review-button'>Preview your review</button>
              </span>
            </div>
            <div className='review-form-links'>
              <a href='https://arcteryx.ugc.bazaarvoice.com/content/7059-en/termsandconditions.htm'>Terms & Condtions</a>
              <a href='https://arcteryx.ugc.bazaarvoice.com/content/7059-en/guidelines.htm'>Review Guidelines</a>
            </div>
          </div>
          <div className='line-divider'></div>
        </form>
      </div>
    )
  }
}

export default WriteReview;