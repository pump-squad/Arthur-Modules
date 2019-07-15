import React from 'react';
import ReviewWordCountZero from './writeReviewSubComponents/reviewWordCountZero.jsx';
import ReviewWordCountNonZero from './writeReviewSubComponents/reviewWordCountNonZero.jsx';
import WritingGuidelines from './writeReviewSubComponents/writingGuidelines.jsx';
import MediaGuidelines from './writeReviewSubComponents/mediaGuidelines.jsx';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewLength: '',
      value: '',
      clickIReview: false,
      clickIMedia: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.checkReviewLength = this.checkReviewLength.bind(this);
    this.clickedIReview = this.clickedIReview.bind(this);
    this.clickedIMedia = this.clickedIMedia.bind(this);
    this.clickedIReviewX = this.clickedIReviewX.bind(this);
    this.clickedIMediaX = this.clickedIMediaX.bind(this);
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
  clickedIReview(event){
    event.preventDefault();
    if (this.state.clickIReview === false){
      this.setState({ clickIReview: true })
    } else{
      this.setState({ clickIReview: false })
    }
  }
  clickedIReviewX(event){
    if (this.state.clickIReview === true){
      this.setState({ clickIReview: false })
    }    
  }
  clickedIMediaX(event){
    if (this.state.clickIMedia === true){
      this.setState({ clickIMedia: false })
    }      
  }
  clickedIMedia(event){
    event.preventDefault();
    if (this.state.clickIMedia === false){
      this.setState({ clickIMedia: true }, () => { 'I Media True!' })
    } else {
      this.setState({ clickIMedia: false }, () => { 'I Media False' })
    }
  }

  render() {
    //renders reviewWordCountZero or NonZero component
    var reviewWordComponent;
    if (this.state.value.length === 0) {
      reviewWordComponent = <ReviewWordCountZero checkReviewLength={this.checkReviewLength} reviewLength={this.state.reviewLength} />
    } else {
      reviewWordComponent = <ReviewWordCountNonZero checkReviewLength={this.checkReviewLength} reviewLength={this.state.reviewLength} />
    }
    //checks to see if i is clicked
    var iComponentW;
    var iComponentM;
    if (this.state.clickIReview === true || this.state.clickIMedia === true){
      //if clickIReview
      if (this.state.clickIReview === true){
        iComponentW = <WritingGuidelines clickedIReviewX={this.clickedIReviewX}/>
      } 
      if (this.state.clickIMedia === true){
        iComponentM = <MediaGuidelines clickedIMediaX={this.clickedIMediaX}/>
      }
      //if clickIMedia
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
                PrIMG
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
                  <div className='overall-rating title-five'>Overall Rating
                    <span className='asterisk'>*</span></div>
                </div>
                <div className='overall-star-container'>
                    STR-IMG
                </div>
              </div>
              <div className='review-form-rating-recommend'>
                <div className='recommend-container'>
                  <div className='i-recommend  title-five'>I Recommend It
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
                <div className='review-fits title-three'>Fits</div>
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
              <div className='title'>Review Title<span className='asterisk'>*</span>
              </div>
              <span className='title-input-wrapper'>
                <input className='input-small' type='text' maxLength="150"></input>
              </span>
              <div>
              <button className='i-review-button-w' onClick={this.clickedIReview}>
                <span>i</span>
              </button>
              </div>
              {iComponentW}
            </div>
            <div className='caption'>Example: This product has great features</div>
            <div className='container'>
              <div className='title'>Pros</div>
              <span className='title-input-wrapper'>
                <input className='input-small' type='text' maxLength="50" placeholder='Add a Pro' onFocus={(e) => e.target.placeholder = ""}
                  onBlur={(e) => e.target.placeholder = "Add a Pro"}></input>
              </span>
            </div>
            <div className='caption'>
              (120 character maximum) Example: durable, lightweight, versatile
            </div>
            <div className='container'>
              <div className='title'>Cons</div>
              <span className='title-input-wrapper'>
                <input className='input-small' type='text' maxLength="50" placeholder='Add a Con' onFocus={(e) => e.target.placeholder = ""}
                  onBlur={(e) => e.target.placeholder = "Add a Con"}></input>
                </span>
            </div>
            <div className='caption'>
              (120 character maximum) Example: cumbersome, flimsy, inefficient
              </div>
            <div className='container'>

              <div className='title'>Your Review<span className='asterisk'>*</span></div>
              <div className='review-body-text'>
                <textarea className='input-big' type='text' rows='10' cols='25' onChange={this.handleChange}></textarea>
              </div>
            </div>
            {reviewWordComponent}
            <div className='container'>
              <div className='title'>Activity</div>
              <span className='title-input-wrapper'>
                <input className='input-small' type='text' maxLength="50"></input>
              </span>
            </div>
            <div className='caption'>
              What activity do you primarily use this product for?
              </div>
          </div>
          <div className='line-divider'></div>
          <div className='review-form-share'>
            <div className='review-form-share-title'>
              Share Photos & Video
            </div>
            <div className='container'>
              <div className='title title-three'>Upload Your Images</div>
              <span className='title-input-wrapper'>
                <div className='file-upload'>
                  <button onClick={()=>{event.preventDefault()}}>Choose File</button>
                  <label><span> </span>No file selected.</label>
                </div>
              </span>
              <div>
              <button className='i-review-button-m' onClick={this.clickedIMedia}>
                <span>i</span>
              </button>
              </div>
              {iComponentM}
            </div>
            <div className='caption'>
              6 image max, 5mb max per image
            </div>
            <div className='container'>
              <div className='title'>Link To Your Video</div>
              <span className='title-input-wrapper'>
                <input className='input-small' type='text' maxLength="1024"></input>
              </span>
            </div>
            <div className='caption'>Paste the URL from your videos on <span> </span>
            <a href="http://www.youtube.com/" className="youtube" target="_blank">YouTube</a>.
              </div>
            <div className='container'>
              <div className='title'>Video Caption</div>
              <span className='title-input-wrapper'>
                <input className='input-small' type='text' maxLength="255"></input>
              </span>
            </div>
            <div className='caption'>
              Example: My demonstration of how to use this product
                </div>
          </div>
          <div className='line-divider'></div>
          <div className='review-form-about-you'>
            <div className='review-form-about-you-title'>About You</div>
            <div className='container'>
              <div className='title'>Choose A Nickname<span className='asterisk'>*</span>
              </div>
              <span className='title-input-wrapper'>
                <input className='input-small' type='text' maxLength="25"></input>
              </span>
            </div>
            <div className='caption'>
              Example: Jackie27. For privacy reasons, do not use your full name or email address.
              </div>
            <div className='container'>
              <div className='title'>Where Are You Located?</div>
              <span className='title-input-wrapper'>
                <input className='input-small' type='text' maxLength="200"></input>
              </span>
            </div>
            <div className='caption'>Example: Vancouver, BC</div>
            <div className='container-subgroup gender-age'>
              <div className='title title-three'>Your Age</div>
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
              <div className='container gender-age'>
              <div className='title title-three'>Your Gender</div>
              <div className='rating-radio-gender-gender'>
                <span>
                <input type='radio'></input>
                <label className='gender-male small'>Male</label>
                </span>
                <span>
                <input type='radio'></input>
                <label className='gender-female small'>Female</label>
                </span>
              </div>
            </div>
            <div className='container-subgroup'>
              <div className='title title-three'>Your Body Type</div>
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
              <div className='send-email-left'></div>
              <div className='title-input-wrapper'>
                <input type='checkbox'></input>
                <span className='checkbox-caption'>Please send me an email when my review is posted or commented on.</span>
              </div>
              </div>            
              <div className='container'>
              <div className='title'>Your Email<span className='asterisk'>*</span></div>
              <span className='title-input-wrapper'>
                <input className='input-small' type='text' maxLength="255"></input>
              </span>
            </div>
            <div className='caption'>We will ONLY use your email to notify you in regards to your submission.</div>
            </div>
            <div className='line-divider'></div>
            <div className='review-form-footer'>
                  <div className='review-form-send-email'>
                    <div className='send-email-left'></div>
                    <div className='title-input-wrapper'>
                      <input type='checkbox'></input>
                      <span className='checkbox-caption'>By submitting this review you agree to our
                      <a href="https://arcteryx.ugc.bazaarvoice.com/content/7059-en/termsandconditions.htm" target="_blank" className='terms'>
                        Terms &amp; Conditions.</a>
                      <span className="asterisk">*</span>
                    </span>
                    </div>
                  </div>
                <div className='review-form-submit'>
                  <div className='review-submit-left'>
                    <div id='submit-button'>> SUBMIT</div>
                    <div id='cancel-button' onClick={this.props.clickExitWriteReview}>> Cancel</div>
                    <div id='preview-button'>> Preview your review</div>
                  </div> 
                  <div className='review-submit-right'>
                    <div className='review-form-links'>
                      <div><a href='https://arcteryx.ugc.bazaarvoice.com/content/7059-en/termsandconditions.htm' target="_blank">Terms & Condtions</a></div>
                      <div className='divider'>|</div>
                      <div><a href='https://arcteryx.ugc.bazaarvoice.com/content/7059-en/guidelines.htm' target="_blank">Review Guidelines</a></div>
                     </div>
                  </div>
                </div>
          </div>  
        </form>
        <div className='line-divider'></div>
  </div>
    )
  }
}

export default WriteReview;