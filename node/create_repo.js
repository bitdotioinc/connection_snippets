// Create a bit.io repo using node
// Note: currently has a bug on API side, is being fixed

// Repos cannot be created directly from node-postgres, but 
// node-fetch can be used to create a repo via the bit.io REST API

const fetch = require('node-fetch');

const url = 'https://api.bit.io/api/v1beta/repos/';
const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer <YOUR_BITIO_KEY>'
  },
  body: JSON.stringify({name: 'my_new_repo', is_private: true})
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));