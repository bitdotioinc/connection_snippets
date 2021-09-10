// Connect to bit.io using node-postgres

const { Client } = require('pg');

const client = new Client({
    database: 'bitdotio',
    host: 'db.bit.io',
    port: 5432,
    user: '<YOUR_USERNAME>',
    password: '<YOUR_BITIO_KEY>'

});

client.connect();

// List owned repos
let sql = 'SELECT nspname FROM pg_namespace WHERE nspname LIKE $1;'
client.query(sql, ['<YOUR_USERNAME>%'], (err, res) => {
    console.table(res.rows);
    client.end()
});