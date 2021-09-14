// Upload data to a bit.io repo using Node
const fetch = require('node-fetch');
let fs = require('fs');

// From file
// Download demo csv here:
// https://raw.githubusercontent.com/bitdotioinc/connection_snippets/main/video-game-sales.csv
// Upload to 'my_new_repo' with table name 'video_game_sales_csv'
const url = 'https://import.bit.io/<YOUR_USERNAME>/my_new_repo/video_game_sales_csv';
let stream = fs.readFileSync('video-game-sales.csv');

const options = {
    method: 'POST',
    headers: {
        Authorization: 'Bearer <YOUR_BITIO_KEY>',
        'Content-Disposition': 'attachment;filename="video-game-sales.csv"'
    },
    body: stream
}

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

// From URL
// Upload to 'my_new_repo' with table name 'video_game_sales_url'
const source_url = 'https://raw.githubusercontent.com/bitdotioinc/connection_snippets/main/video-game-sales.csv'
const url = 'https://api.bit.io/api/v1beta/import/url/';
const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer <YOUR_BITIO_KEY>'
  },
  body: JSON.stringify({
    create_table_if_not_exists: true,
    url: source_url,
    table_name: 'video_game_sales_url',
    repo_name: 'my_new_repo'})
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));