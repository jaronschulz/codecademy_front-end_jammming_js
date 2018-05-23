const clientID = '';
const redirectURI = 'http://localhost:3000/';
let accessToken = '';

const Spotify = {

  getAccessToke: () => {
    if (accessToken) {
      return accessToken;
    }
    const URL = window.location.href;

    const expiresIn = URL.match('/expires_in=([^&]*)/');
    accessToken = URL.match('/access_token=([^&]*)/');

    window.setTimeout(() => accessToken = '', expiresIn * 1000);
    window.history.pushState('Access Token', null, '/');

    window.location = (`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`);
  },

  search: term => new Promise((resolve, reject) => {
    console.log('It is done.');
    if ('Something') {
      resolve(
        fetch(
          `https://api.spotify.com/v1/search?type=track&q=${term}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          })
          .then((response) => {
            const JSON = response.json();
            JSON.map((track) => {
              if (!JSON) {
                return [];
              }
              return {
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                URI: track.uri,
              };
            });
          }));
    } else {
      reject('ERROR');
    }
  }),
};

export default Spotify;
