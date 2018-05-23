import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    term: '',
  };

  search = (term) => {
    this.props.onSearch(term);
  }

  handleTermChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange}
        />
        <a>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
