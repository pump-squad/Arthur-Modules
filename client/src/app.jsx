import React from 'react';
import Search from './search.jsx';
import axios from 'axios';
import ReviewList from './reviewlist.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewCount: 10,
      searchValue: '',
      keyWords:
        ['jacket', 'hoody', 'vest', 'coat',
          'parka', 'zip', 'sweater', 'crew',
          'henley', 'shirt', 'tank', 'top',
          'pant', 'bib', 'tight', 'knicker',
          'bottom', 'boxer', 'short', 'skort',
          'dress'],
      reviews: []
    }
    //create onSubmit to handle Submit Functionality in SearchBar Component
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getSearchValue = this.getSearchValue.bind(this);
    this.generateNameGenderAfterSubmit = this.generateNameGenderAfterSubmit.bind(this);
    this.get = this.get.bind(this);
    this.generateRandomReviewNumber = this.generateRandomReviewNumber.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('Current SearchValue ', this.state.searchValue);
    //will fire off get request
    this.get();
    // this.generateRandomReviewNumber();
  }

  getSearchValue(value) {
    this.setState({
      searchValue: value
    });
  }
  //get value needed for api request from search input value
  generateNameGenderAfterSubmit(value) {
    //hold name and gender
    var data = {
      name: '',
      gender: ''
    }
    var keyWord = this.state.keyWords;
    //check name
    for (var i = 0; i < keyWord.length; i++) {
      if (value.indexOf(keyWord[i]) !== -1) {
        data.name = keyWord[i];
        break;
      }
    }
    //check gender and change values to male or female
    //b/c these values are what is stored in our db
    if (value.indexOf('men') !== -1) {
      data.gender = 'male';
    } else if (value.indexOf('women') !== -1) {
      data.gender = 'female';
    }
    return data;
  }
  get() {
    var queryInfo = this.generateNameGenderAfterSubmit(this.state.searchValue);
    console.log('Name and gender ', queryInfo.name, queryInfo.gender);
    axios.get(`/reviews/product/${queryInfo.name}/${queryInfo.gender}`)
      .then((data) => {
        this.setState({ reviews: data.data }, () => { console.log('Data ', data.data) })
      })
      .catch((err) => {
        console.log('get Request Failed ', err)
      })
  }
  //once I get reviews with api request, create random review count
  generateRandomReviewNumber() {
    //get random number between 0 - 100
    var count = Math.floor((Math.random() * 100));
    this.setState({ reviewCount: count }, () => { console.log('Review Count ', count) });
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='delete-when-integrate'>
        <div id='search-bar'>
          <Search handleSubmit={this.handleSubmit} getSearchValue={this.getSearchValue} />
        </div>
        <div id='product-reviews'>
          <div className='accordion_title'>
            <h2>
              PRODUCT REVIEWS
          <span className='product-title_star_img'>
                Stars
            <span className='product-title_star_img'></span>
              </span>
              <span className='product-title_total-rating'>{`(${this.state.reviewCount})`}</span>
            </h2>
            <button className='accordion_toggle'>
              <span>
                X
            </span>
            </button>
          </div>
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
              <button>WRITE A REVIEW</button>
            </span>
            <span id='write-review_sort_by'>
              <select>
                <option>Sort by</option>
                <option>Newest</option>
                <option>Oldest</option>
                <option>Highest Rating</option>
                <option>Lowest Rating</option>
                <option>Most helpful</option>
                <option>Staff Reviews</option>
                <option>Top Contributors</option>
              </select>
            </span>
          </div>
        </div>
        <ReviewList reviewCount={this.state.reviewCount} reviews={this.state.reviews}/>
      </div>
    )
  }
}
export default App;