import React from 'react';
import PropTypes from 'prop-types';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

const SearchResults = props => (
  <div className="SearchResults">
    <h2>Results</h2>
    <TrackList
      tracks={props.searchResults}
      onAdd={props.onAdd}
      isRemoval={false}
    />
  </div>
);

export default SearchResults;
