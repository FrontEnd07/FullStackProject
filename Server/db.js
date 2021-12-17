const Pool = require("pg").Pool

const pool = new Pool({
    user: 'postgres',
    password: '1234next',
    host: 'localhost',
    port: 5432,
    database: 'avecoder',
})

module.exports = pool