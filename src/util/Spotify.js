const clientID = 'b8a6bab352c449c1982079e126a27059';
const redirectURI = 'http://localhost:3000/';
let accessToken = '';

const Spotify = {

//   SavePlaylist(playlistName, trackURI) {
//     const access_token = accessToken;
//     const header = '';

//     if (!playlistName && !trackURI) {

//     } else {

//     }
//   },

  GetAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const URL = window.location.href;
    const expiresIn = URL.match('/expires_in=([^&]*)/');
    accessToken = URL.match('/access_token=([^&]*)/');

    window.setTimeout(() => accessToken = '', expiresIn * 1000);
    window.history.pushState('Access Token', null, '/');

    window.location = (`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`);

    return console.log('Got the token');
  },

  async Search(searchTerm) {
    try {
      const searchResult = await fetch(
        `GET https://api.spotify.com/v1/search?type=track&q=${searchTerm}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((response) => {
          const JSON = response.json();
        })
        .then(JSON.map((track) => {
          if (!JSON) {
            return null;
          }
          return {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            URI: track.uri,
          };
        }));
    } catch (e) {
      console.log('An error accured', e);
    }
  },

};

export default Spotify;

