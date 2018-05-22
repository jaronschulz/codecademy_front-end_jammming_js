import React from 'react';
import PropTypes from 'prop-types';
import {TrackList} from '../TrackList/TrackList'
import './SearchResults.css';

export class SearchResults extends React.Component {
  // static propTypes = {
  //   onAdd: PropTypes.func,
  //   searchResults: PropTypes.array
  // }

  constructor(props){
      super(props);
  }

  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList onAdd={this.props.onAdd} tracks={this.props.searchResults} isRemoval={false} />
      </div>
    );
  }
}
