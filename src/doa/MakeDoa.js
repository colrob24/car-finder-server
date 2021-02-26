const { Client } = require('pg')

const getMakes = async () => {
    const client = new Client({
        user: 'admin',
        host: 'localhost',
        database: 'carfinder',
        password: 'AgnesRuby0310',
        port: 5432
    });
    await client.connect();
    const res = await client.query('SELECT * from public."Makes"');

    return res.rows;
}

exports.getMakes = getMakes();