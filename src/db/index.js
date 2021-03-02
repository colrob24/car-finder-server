const { Pool } = require('pg')

const pool = new Pool({
    user: 'admin',
    host: 'pgsql-server',
    database: 'carfinder',
    password: 'AgnesRuby0310',
    port: 5432
});

module.exports = {
  query: (text, params) => pool.query(text, params),
}