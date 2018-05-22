import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';


class App extends Component {
  state = {
    searchResults: [
      {
        name: 'Juhuu',
        artist: 'Marlene',
        album: 'Fuckshit',
        id: 1,
      },
      {
        name: 'asf',
        artist: 'Patene',
        album: 'Solomone',
        id: 2,
      },

    ],
    playlistName: 'Schindlers List',
    playlistTracks: [
      {
        name: 'Free',
        artist: 'Freeman',
        album: 'Freedome',
        id: 3,
      },
    ],
  };


  addTrack = (track) => {
    const searchArray = this.state.playlistTracks;

    if (searchArray.find(savedTrack => savedTrack.id !== track.id)) {
      searchArray.push(track);
      this.setState({
        playlistTracks: searchArray,
      });
    }
  }

  removeTrack = (track) => {
    const playlist = this.state.playlistTracks;

    const newPlaylist = playlist.filter(dTrack => dTrack.id !== track.id);
    this.setState({
      playlistTracks: newPlaylist,
    });
  }

  updatePlaylistName = (name) => {
    this.setState({
      playlistName: name,
    });
  }

  savePlaylist = () => {
    this.state.playlistTracks.forEach((element) => {
      const trackURIs = element.uri;
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
