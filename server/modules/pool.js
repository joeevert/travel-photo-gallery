const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool({
    database: 'travel-gallery',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('connect', () => {
    console.log('Connected to the db!');
});

pool.on('error', (error) => {
    console.log('Error with db connection!', error);
});

module.exports = pool;