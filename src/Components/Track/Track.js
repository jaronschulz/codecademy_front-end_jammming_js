import React from 'react';
import PropTypes from 'prop-types';
import './Track.css';

export class Track extends React.Component {
  constructor(props){
    super(props);
    this.addTrack =
    this.addTrack.bind(this);
    this.renderAction =
    this.renderAction.bind(this);
  }

  renderAction(isRemoval){
    if (isRemoval === this.props.isRemoval) {
      return '-'
    } else {
      return '+'
    }
  }

  addTrack(event){
      this.props.onAdd(this.props.track);
  }

  render() {
    return (
      <div className="Track" >
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{`${this.props.track.artist} | ${this.props.track.album}`}</p>
        </div>
        <a className="Track-action" onClick={this.addTrack} >{this.renderAction} </a>
      </div>
    );
  }
}
