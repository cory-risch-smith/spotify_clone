// https://developer.spotify.com/documentation/web-playback-SDK/quick–start/#

import Login from "./Login";

export const authEndpoint = "https://accounts.spotify.com/authorize";

//User is brought to spotify sign in onCLick of login button

const redirectUri = "http://localhost:3000/";

// after pressing Login, they are sent back over to localhost

const clientId = "d16c50d92e1a435c8b32e8aec70ef815";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      //#accessToken=mysupersecretkey&name=cory
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
