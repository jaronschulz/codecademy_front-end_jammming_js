import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

const Playlist = props => (
  <div className="Playlist">
    <input defaultValue="New Playlist" />
    <TrackList tracks={props.playlistTracks} onRemove={props.onRemove} isRemoval />
    <a className="Playlist-save">SAVE TO SPOTIFY</a>
  </div>
);

export default Playlist;
