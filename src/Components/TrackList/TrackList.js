import React from 'react';
import PropTypes from 'prop-types';
import {Track} from '../Track/Track';
import './TrackList.css';

export class TrackList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (<div className="TrackList">
      {
        this.props.tracks.map(function(track) {
          return
          <Track onAdd={this.props.onAdd} key={track.id} track={track} isRemoval={false} />
        })
      }
    </div>);
  }
}
