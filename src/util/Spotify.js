const clientID = '';
const redirectURI = "http://localhost:3000/";
const accessToken = '';
const Spotify = {
    getAccessToken = (token) => {
        if (accessToken) {
            return accessToken;
        } else {
            const URL = window.location.href;

            const expiresIn = URL.match("/expires_in=([^&]*)/")
            accessToken = URL.match("/access_token=([^&]*)/")

            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');

            window.location = (`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`);
        }
    }
};

export default Spotify;
