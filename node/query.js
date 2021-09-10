// Query from a bit.io repo using node

const { Client } = require('pg');

const client = new Client({
    database: 'bitdotio',
    host: 'db.bit.io',
    port: 5432,
    user: '<YOUR_USERNAME>',
    password: '<YOUR_BITIO_KEY>'

});

client.connect();

let sql = 'SELECT date, name, local_price FROM "bitdotio/big_mac_index"."big_mac_index";'
client.query(sql, (err, res) => {
    console.table(res.rows);
    client.end()
});