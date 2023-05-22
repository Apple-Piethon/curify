import environment from '../../environments/environment';
import { Buffer } from 'buffer';


var querystring = require('querystring');

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var state = generateRandomString(16);

const authEndpoint = "https://accounts.spotify.com/authorize?";
const redirectUri = environment.api_domain + "callback";
const clientId = "4a09e29409df43a184301f6fadb19e94";
const clientSecret = '6d32d9603a744c6ea1bcdd3e92561681'; // Your secret

const scopes = [
  "streaming",
  "playlist-read-private",
  "user-read-email",
  "user-read-private",
];

export const Auth = authEndpoint +
    querystring.stringify({
      response_type: 'code',
      client_id: clientId,
      scope: scopes.join(" "),
      redirect_uri: redirectUri,
      state: state
    });

export const AuthOptions = {
  url: 'https://accounts.spotify.com/api/token',
  form: {
    code: null,
    redirect_uri: redirectUri,
    grant_type: 'authorization_code'
  },
  headers: {
    'Authorization': 'Basic ' + 
    // (new Buffer(clientId + ':' + clientSecret).toString('base64'))
    (Buffer.from(clientId + ":" + clientSecret).toString('base64'))
  },
  json: true
}

// info about the current user that is signed in, can add more stuff later like name,
// country, etc.
// export const User = {
//   accessToken: null,
//   refreshToken: null,
//   profile: null,      // impt spotify info
//   showPick: null,     // movie/show/both
//   playlistPick: null,
//   result: null,
// }

// export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
//   "%20"
// )}`;

// loginUrl = "https://accounts.spotify.com/authorize?client_id=YourClientId&response_type=code&redirect_uri=https://localhost:3000/&scope=streaming%20user-read-email%20user-read-private"


