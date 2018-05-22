import React from 'react';
import PropTypes from 'prop-types';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

const SearchResults = props => (
  <div className="SearchResults">
    <h2>Results</h2>
    <TrackList onAdd={props.onAdd} tracks={props.searchResults} isRemoval={false} />
  </div>
);

export default SearchResults;
