import React from 'react';
import Search from './search.jsx';
import axios from 'axios';
import ReviewList from './reviewList.jsx';
import WriteReview from './writeReview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewCount: '',
      searchValue: '',
      keyWords:
        ['jacket', 'hoody', 'vest', 'coat',
          'parka', 'zip', 'sweater', 'crew',
          'henley', 'shirt', 'tank', 'top',
          'pant', 'bib', 'tight', 'knicker',
          'bottom', 'boxer', 'short', 'skort',
          'dress'],
      reviews: [],
      writeReviewClicked: false
    }
    // create onSubmit to handle Submit Functionality in SearchBar Component
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getSearchValue = this.getSearchValue.bind(this);
    this.generateNameGenderAfterSubmit = this.generateNameGenderAfterSubmit.bind(this);
    this.get = this.get.bind(this);
    this.generateRandomReviewNumber = this.generateRandomReviewNumber.bind(this);
    this.clickWriteReview = this.clickWriteReview.bind(this);
    this.clickExitWriteReview = this.clickExitWriteReview.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Current SearchValue ', this.state.searchValue);
    //will fire off get request
    this.get();
    this.generateRandomReviewNumber();
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
    this.setState({ reviewCount: count });
  }

  clickWriteReview() {
    this.setState({ writeReviewClicked: true })
  }
  clickExitWriteReview() {
    this.setState({ writeReviewClicked: false })
  }

  componentDidMount() {
  }

  render() {
    const writeReview = this.state.writeReviewClicked;
    let page;

    if (writeReview) {
      page = <WriteReview clickWriteReview={this.clickWriteReview} clickExitWriteReview={this.clickExitWriteReview} />;
    } else {
      page = <ReviewList reviewCount={this.state.reviewCount} reviews={this.state.reviews} clickWriteReview={this.clickWriteReview} />;
    }

    return (
      <div className='holds-bottom'>
      <div className='holds-review'>
        <div id='search-bar'>
          <Search handleSubmit={this.handleSubmit} getSearchValue={this.getSearchValue} />
        </div>
        <div id='product-reviews'>
          <div className='accordion-title'>
            <h2>
              PRODUCT REVIEWS
              <span className='product-title-star-img'>
                Stars
                <span className='product-title-star-img'></span>
                <span className='product-title-total-rating'>{`(${this.state.reviewCount})`}</span>
              </span>
            </h2>
            <button className='accordion-toggle' onClick={this.clickExitWriteReview}>
              <span>
                X
            </span>
            </button>
          </div>
        </div>
        {page}
      </div>
      </div>
    )
  }
}
export default App;
