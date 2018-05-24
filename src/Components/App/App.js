import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';
import './App.css';


class App extends Component {
  state = {
    searchResults: [
      {
        name: 'FreeONE',
        artist: 'Freeman',
        album: 'FLick',
        id: 1,
      },
      {
        name: 'FreeTwo',
        artist: 'Freeman',
        album: 'Nonesense',
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
     const arr = this.state.playlistTracks;
     if (arr.length === 0) {
       arr.push(track); this.setState({
         playlistTracks: arr,
       });
     } else if (arr.find(savedTrack => savedTrack.id !== track.id)) {
       if (arr.find(savedTrack => savedTrack.id === track.id)) {
         return null;
       }
       arr.push(track);
       this.setState({
         playlistTracks: arr,
       });
     }
   }

  removeTrack = (track) => {
    const arr = this.state.playlistTracks;
    const indexOfTrack = arr.indexOf(track);
    arr.splice(indexOfTrack, 1);
    this.setState({
      playlistTracks: arr,
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

  // search = new Spotify.search();


  // search = (term) => {
  //   Spotify.search(term);
  //   this.setState.searchResults({
  //     id: term.id,
  //     name: term.name,
  //     artist: term.artis,
  //     album: term.album,
  //     uri: term.uri,
  //   });
  // }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar
            onSearch={this.search}
          />
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
