import React from 'react';
import Review from './review.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: '',
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
    // this.renderReview = this.renderReview.bind(this);
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
    console.log('newArray highestFilter ', newArray)
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
    return newArray;
  }
  //figure which Sort to Use
  useWhichFilter(array) {
    var value = this.state.selectValue;
    console.log('inside use which filter value ', value)
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
  // renderReview = (pages) => {
  //   var pages = pages.slice(0, 10);
  //   console.log('inside render review ', pages)
  //   var reviewItems = pages.map((review, index) => {
  //       <Review review={review} key={index} />
  //   })
  // }

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
    console.log('updated list inside render ', updatedList);

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
      console.log('newupdatedLIst ', updatedList)
    }

    return (
      <div>
        <div className='ratings-summary'>
          <div className='ratings-summary_title'>
            <h4>Ratings Summary</h4>
          </div>
          <div>
            {/*holds image of stars*/}
            <img></img>
          </div>
          <div className='fitrating-slider'>
            <div className='fitrating-slider_header'>
              Fit:
          </div>
            <div className='fitrating-slider_label1'>
              Fits Small
          </div>
            <div className='fitrating-slider_image'>
              <img></img>
            </div>
            <div className='fitrating-slider_label2'>
              Fits Large
          </div>
          </div>
        </div>
        <div className='write-review'>
          <span id='write-review_button'>
            <button onClick={this.props.clickWriteReview}>WRITE A REVIEW</button>
          </span>
          <span id='write-review_sort_by'>
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
          </span>
        </div>
        <div className='reviewList'>
          {
            // updatedList.map((review, index) => {
            //   return (
            //     <Review review={review} key={index} />
            //   )
            // })
          }
          <div>>
          {
              pages.map((page, index) => {
                return (
                  <span key={index}>{page}</span>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewList;