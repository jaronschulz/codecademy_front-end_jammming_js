import React from 'react';
import PropTypes from 'prop-types';
import './Track.css';

const Track = (props) => {
  const addTrack = (event) => {
    props.onAdd(props.track);
  };

  const removeTrack = (event) => {
    props.onRemove(props.track);
  };

  const renderAction = (isRemoval) => {
    if (props.isRemoval) {
      return <a className="Track-action" onClick={removeTrack}> - </a>;
    }
    return <a className="Track-action" onClick={addTrack}>  + </a>;
  };

  return (
    <div className="Track" >
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>{`${props.track.artist} | ${props.track.album}`}</p>
      </div>
      {renderAction()}
    </div>
  );
};


export default Track;
