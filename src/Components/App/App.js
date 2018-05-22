import React, {Component} from 'react';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        {
          name:   'Juhuu',
          artist: 'Marlene',
          album:  'Fuckshit',
          id:     1
        },
        {
          name:   'asf',
          artist: 'Patene',
          album:  'Solomone',
          id:     2
        },
      ],
      playlistName: 'Schindlers List',
      playlistTracks: [
        {
          name:   'Free',
          artist: 'Freeman',
          album:  'Freedome',
          id:     3
        }
      ]
    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track){
    if
    (!this.state.playlistTracks.find( e => e.id === track.id )) {
      this.state.playlistTracks.pop(track)
    }
  }

  render() {
    return (<div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
