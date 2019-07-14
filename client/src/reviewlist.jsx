import React from 'react';
import Review from './review.jsx';
import PageList from './pageList.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: '',
      currentPage: 1,
    }
    this.handleChange = this.handleChange.bind(this);
    this.newestFilter = this.newestFilter.bind(this);
    this.oldestFilter = this.oldestFilter.bind(this);
    this.highestFilter = this.highestFilter.bind(this);
    this.lowestFilter = this.lowestFilter.bind(this);
    this.mostHelpfulFilter = this.mostHelpfulFilter.bind(this);
    this.staffFilter = this.staffFilter.bind(this);
    this.topContributorFilter = this.topContributorFilter.bind(this);
    this.useWhichFilter = this.useWhichFilter.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.getStarAverage = this.getStarAverage.bind(this);
  }
  handleChange(event) {
    console.log(event.target.value)
    this.setState({ selectValue: event.target.value });
  }
  newestFilter(array) {
    var newArray = array.slice();
    newArray.sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.date) - new Date(a.date);
    });
    return newArray;
  }
  oldestFilter(array) {
    return this.newestFilter(array).reverse();
  }
  highestFilter(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i].starCount === 5) {
        newArray.push(array[i])
      }
    }
    for (var i = 0; i < array.length; i++) {
      if (array[i].starCount === 4) {
        newArray.push(array[i])
      }
    }
    for (var i = 0; i < array.length; i++) {
      if (array[i].starCount === 3) {
        newArray.push(array[i])
      }
    }
    for (var i = 0; i < array.length; i++) {
      if (array[i].starCount === 2) {
        newArray.push(array[i])
      }
    }
    for (var i = 0; i < array.length; i++) {
      if (array[i].starCount === 1) {
        newArray.push(array[i])
      }
    }
    return newArray;
  }
  lowestFilter(array) {
    var newArray = this.highestFilter(array);
    return newArray.reverse();
  }
  mostHelpfulFilter(array) {
    var newArray = array.slice();
    newArray.sort(function (a, b) {
      return a.helpful - b.helpful;
    });
    return newArray.reverse();
  }
  staffFilter(array) {
    return array;
  }
  topContributorFilter(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i].tag === 'Top10') {
        newArray.push(array[i])
      }
    }
    for (var i = 0; i < array.length; i++) {
      if (array[i].tag === 'Top50') {
        newArray.push(array[i])
      }
    }
    for (var i = 0; i < array.length; i++) {
      if (array[i].tag === 'Top100') {
        newArray.push(array[i])
      }
    }
    for (var i = 0; i < array.length; i++) {
      if (array[i].tag === 'Top500') {
        newArray.push(array[i])
      }
    }
    for (var i = 0; i < array.length; i++) {
      if (newArray.indexOf(array[i] === -1)) {
        newArray.push(array[i]);
      }
    }
    newArray.push(array);
    return newArray;
  }
  //figure which Sort to Use
  useWhichFilter(array) {
    var value = this.state.selectValue;
    var newArray = [];
    if (value === 'newest') {
      newArray = this.newestFilter(array);
    } else if (value === 'oldest') {
      newArray = this.oldestFilter(array);
    } else if (value === 'highest') {
      newArray = this.highestFilter(array);
      console.log('newArray highest ', newArray)
    } else if (value === 'lowest') {
      newArray = this.lowestFilter(array);
    } else if (value === 'mostHelpful') {
      newArray = this.mostHelpfulFilter(array);
    } else if (value === 'staff') {
      newArray = this.staffFilter(array);
    } else if (value === 'topContributors') {
      newArray = this.topContributorFilter(array);
    } else {
      newArray = array;
    }
    return newArray;
  }
  handlePageChange(event) {
    //will set current page to be what I clicked
    this.setState({ currentPage: Number(event.target.innerHTML) })
    console.log('inside handle page change ', Number(event.target.innerHTML));
  }
  getStarAverage(array){
    var holdAllStarCount = 0;
    for (var i = 0; i < array.length; i++){
      if ( typeof(array[i]) !== 'undefined'){
        holdAllStarCount += array[i].starCount;
      }
    }
    return holdAllStarCount/array.length;
  }

  render() {
    var { reviewCount, reviews } = this.props;
    var updatedList = [];
    for (var i = 0; i < reviewCount; i++) {
      updatedList.push(reviews[i]);
    }
    //store pages
    var pages = [];
    var countDivide = Math.floor(reviewCount / 10);
    for (var i = 1; i <= countDivide; i++) {
      pages.push(i);
    }
    //update List to whatever filter is clicked
    updatedList = this.useWhichFilter(updatedList);
    //want to go through updatedLIst and add page numbers
    var count = 0;
    var pageNumber = 1;
    for (var i = 0; i < updatedList.length; i++) {
      //add page number to object
      if (typeof (updatedList[i]) !== 'undefined') {
        updatedList[i].pageNumber = pageNumber;
        count++;
        if (count % 10 === 0) {
          //up pageNumber
          pageNumber++;
          //reset count
          count = 0;
        }
        // console.log('updatedList ', updatedList[i])
      }
    }
    var average = this.getStarAverage(updatedList);
    //will only render objects with current Page value inside of it
    //i can either make a new array or loop through and set it
    const newUpdatedList = [];
    for (var i = 0; i < updatedList.length; i++) {
      if (typeof (updatedList[i]) !== 'undefined') {
        if (this.state.currentPage === updatedList[i].pageNumber) {
          newUpdatedList.push(updatedList[i]);
        }
      }
    }
    return (
      <div>
        <div className='ratings-summary'>
          <div>
            <div className='ratings-summary-header'>
              <div className='ratings-summary-header-title'>Ratings summary</div>
              <div className='ratings-summary-header-advanced-filter'>Advanced filters</div>
            </div>
            <div className='star-container'>
                <div className='star-container-stars'>{average}
                  <span className='star-container-stars'>
                    <img></img>
                  </span>
                </div>
                <div className='star-container-advanced-options'>
                    <select className='advanced-options-language'>
                      <option>Language</option>
                      <option>Danish</option>
                      <option>German</option>
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>Italian</option>
                      <option>Japanese</option>
                      <option>Norwegian</option>
                      <option>Swedish</option>
                      <option>Chinese</option>
                    </select>
                    <select className='advanced-options-star-rating'>
                      <option>Star Rating</option>
                      <option>1 Star</option>
                      <option>2 Stars</option>
                      <option>3 Stars</option>
                      <option>4 Stars</option>
                      <option>5 Stars</option>
                    </select>
                    <select className='advanced-options-fit'>
                      <option>Fit</option> 
                      <option>Fits Very Small</option>
                      <option>Fits Small</option>
                      <option>True to Size</option>
                      <option>Fits Large</option>
                      <option>Fits Very Large</option>
                    </select>
                    <select className='advanced-options-age'>
                      <option>Age</option> 
                      <option>Under 18</option>
                      <option>18-24</option>
                      <option>25-34</option>
                      <option>35-44</option>
                      <option>45-54</option>
                      <option>55-64</option>
                      <option>Over 65</option>
                    </select>
                    <select className='advanced-options-gender'>
                      <option>Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                    <select className='advanced-options-bodyType'>
                      <option>Body Type</option>
                      <option>Petite</option>
                      <option>Lean</option>
                      <option>Slim</option>
                      <option>Athletic</option>
                      <option>Solid</option>
                      <option>Curvy</option>
                    </select>
                  </div>
                </div>

                <div className='fitrating-container'>
                  <div className='fitrating-slider'>
                    <span className='fitrating-slider-header'>
                      Fit:
                  </span>
                    <span className='fitrating-slider-label1'>
                      Fits Small
                  </span>
                    <span className='fitrating-slider-image'>
                      <img></img>
                    </span>
                    <span className='fitrating-slider-label2'>
                      Fits Large
                  </span>
                  </div>
                  <div className='fitrating-container-advanced-filter'>
                    <div>Click on filters to refine your results.</div>
                  </div>
                </div>
          </div>
        </div>
        <div className='write-review'>
          <div className='header-container'>
            <div className='write-left'>
              <span>
                <div id='write-review-button' onClick={this.props.clickWriteReview}>WRITE A REVIEW</div>
              </span>
              </div>
            <div id='write-review-sort-by' className='write-right'>
              <select value={this.state.selectValue} onChange={this.handleChange}>
                <option value=''>Sort by</option>
                <option value='newest'>Newest</option>
                <option value='oldest'>Oldest</option>
                <option value='highest'>Highest Rating</option>
                <option value='lowest'>Lowest Rating</option>
                <option value='mostHelpful'>Most helpful</option>
                <option value='staff'>Staff Reviews</option>
                <option value='topContributors'>Top Contributors</option>
              </select>
            </div>
          </div>
        </div>
        <div className='line-divider'></div>
        <div className='reviewList'>
          {
            newUpdatedList.map((review, index) => {
              return (
                <Review review={review} key={index} />
              )
            })
          }
        </div>
        <PageList pages={pages} handlePageChange={this.handlePageChange}/>
      </div>
    )
  }
}

export default ReviewList;