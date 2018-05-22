import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

const Playlist = (props) => {
  const handleNameChange = (event) => {
    props.onNameChange(event.target.value);
  };

  return (
    <div className="Playlist">
      <input defaultValue="New Playlist" onChange={handleNameChange} />
      <TrackList
        tracks={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval
      />
      <a className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</a>
    </div>
  );
};
export default Playlist;
