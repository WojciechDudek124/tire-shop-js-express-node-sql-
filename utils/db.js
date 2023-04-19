const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'tire_base',
    decimalNumbers: true,
    namedPlaceholders: true,
});

module.exports = {
    pool,
};