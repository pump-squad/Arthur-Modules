import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.getSearchValue(event.target.value);
    // console.log('Current Search ', event.target.value)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type='text' value={this.state.value} onChange={this.handleChange}></input>
        <input type='submit' value='Submit'></input>
      </form>
    )
  }
}

export default Search;
