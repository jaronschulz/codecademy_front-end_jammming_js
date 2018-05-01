import React from 'react';
import {Track} from '../Track/Track';
import './TrackList.css';


export class TrackList extends React.Component {
  constructor(props){
      super(props);

      // this.makeList =
      // this.makeList.bind(this);
  }

  // makeList() {
  //   this.props.tracks.map(function(track, i) {
  //     return <Track onAdd={this.props.onAdd} key={track.id} track={track} />
  //   })
  // }

  render() {
    return (
      <div className="TrackList">
      {this.props.tracks.map(function(track, i) {
        return <Track onAdd={this.props.onAdd} key={track.id} track={track} />
      })}
      </div>);
  }
}
