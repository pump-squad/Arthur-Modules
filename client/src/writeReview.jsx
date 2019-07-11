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
          <div className='review-form_rating'>
            <div className='review-form_rating_header'>
              <div className='review-form_header_title'>
                <span>Give It A Rating</span>
              </div>
              <div className='required'>
                <span>*</span>
                <span>required</span>
              </div>
            </div>
            <div className='review-form_rating_body'>
              <div className='review-form_rating_stars'>
                <span>Overall Rating</span>
                {/*Put in star image*/}
                <span>*</span>
                <span>S</span>
                <span>S</span>
                <span>S</span>
                <span>S</span>
                <span>S</span>
              </div>
              <div className='review-form_rating_recommend'>
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
              <div className='review-form_rating_fits'>
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
          <div className='review-form_tellUs'>
            <div className='review-form_title'>
              <label>Review Title<span className='asterisk'>*</span>
              </label>
              <span className='title_input_wrapper'>
                <input type='text' maxLength="150"></input>
              </span>
              <span>Example: This product has great features</span>
            </div>
            <div className='review-form_pros'>
              <label>Pros</label>
              <span className='title_input_wrapper'>
                <input type='text' maxLength="50"></input>
              </span>
              <span>(120 character maximum) Example: durable, lightweight, versatile
              </span>
            </div>
            <div className='review-form_cons'>
              <label>Cons</label>
              <span className='title_input_wrapper'>
                <input type='text' maxLength="50"></input>
              </span>
              <span>
                (120 character maximum) Example: cumbersome, flimsy, inefficient
              </span>
            </div>
            <div className='review-form_review'>
              <label>Your Review<span className='asterisk'>*</span>
              </label>
              <span className='title_input_wrapper'>
                <textarea type='text' rows='10' cols='25' onChange={this.handleChange}></textarea>
              </span>
              {reviewWordComponent}
            </div>
            <div className='review-form_activity'>
              <label>Activity</label>
              <span className='title_input_wrapper'>
                <input type='text' maxLength="50"></input>
              </span>
              <span>
                What activity do you primarily use this product for?
              </span>
            </div>
          </div>
          <div className='review-form_share'>
            <div className='review-form_title'>
              <label>Upload Your Images
              </label>
              <span className='title_input_wrapper'>
                <div>
                  <button>Choose File</button>
                  <label></label>
                </div>
              </span>
              <span>6 image max, 5mb max per image</span>
            </div>
            <div className='review-form_vidLink'>
              <label>Link To Your Video</label>
              <span className='title_input_wrapper'>
                <input type='text' maxLength="1024"></input>
              </span>
              <span>Paste the URL from your videos on <a href="http://www.youtube.com/" className="youtube" target="_blank">YouTube</a>.
              </span>
            </div>
            <div className='review-form_vidCaption'>
              <label>Video Caption</label>
              <span className='title_input_wrapper'>
                <input type='text' maxLength="255"></input>
              </span>
              <span>
                Example: My demonstration of how to use this product              </span>
            </div>
          </div>
          <div className='review-form_aboutYou'>
            <div className='review-form_title'>
              <label>Choose A Nickname<span className='asterisk'>*</span>
              </label>
              <span className='title_input_wrapper'>
                <input type='text' maxLength="25"></input>
              </span>
              <span>Example: Jackie27. For privacy reasons, do not use your full name or email address.</span>
            </div>
            <div className='review-form_location'>
              <label>Where Are You Located?</label>
              <span className='title_input_wrapper'>
                <input type='text' maxLength="200"></input>
              </span>
              <span>Example: Vancouver, BC</span>
            </div>
            <div className='review-form_age'>
              <label>Your Age</label>
              <span className='title_input_wrapper'>
                <select>
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
            <div className='review-form_gender'>
              <span>Your Gender</span>
                <span>
                  <input type='radio'></input>
                  <label>Male</label>
                </span>
                <span>
                  <input type='radio'></input>
                  <label>Female</label>
                </span>
            </div>
            <div className='review-form_bodyType'>
                <span>
                  <input type='radio'></input>
                  <label>Petite</label>
                </span>
                <span>
                  <input type='radio'></input>
                  <label>Lean</label>
                </span>
                <span>
                  <input type='radio'></input>
                  <label>Slim</label>
                </span>
                <span>
                  <input type='radio'></input>
                  <label>Athlethic</label>
                </span>
                <span>
                  <input type='radio'></input>
                  <label>Solid</label>
                </span>
                <span>
                  <input type='radio'></input>
                  <label>Curvy</label>
                </span>
              </div>
              <div className='review-form_sendEmail'>
              <span className='title_input_wrapper'>
                <input type='checkbox'></input>
              </span>
              <label>Please send me an email when my review is posted or commented on.</label>
            </div>
            <div className='review-form_email'>
              <label>Your Email<span className='asterisk'>*</span></label>
              <span className='title_input_wrapper'>
                <input type='text' maxLength="255"></input>
              </span>
              <span>We will ONLY use your email to notify you in regards to your submission.</span>
            </div>
            <div className='review-form_sendEmail'>
              <span className='title_input_wrapper'>
                <input type='checkbox'></input>
              </span>
              <label><span>By submitting this review you agree to our <a href='https://arcteryx.ugc.bazaarvoice.com/content/7059-en/termsandconditions.htm'>Terms & Conditions.</a><span className="asterisk">*</span></span></label>
            </div>
          </div>
          <div className='review-form_footer'>
            <div className='review-form_submit'>
              <span>
                <button>Submit</button>
              </span>
              <span>
                <button>Cancel</button>
              </span>
              <span>
                <button>Preview your review</button>
              </span>
            </div>
            <div className='review-form_links'>
              <a href='https://arcteryx.ugc.bazaarvoice.com/content/7059-en/termsandconditions.htm'>Terms & Condtions</a>
              <a href='https://arcteryx.ugc.bazaarvoice.com/content/7059-en/guidelines.htm'>Review Guidelines</a>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default WriteReview;