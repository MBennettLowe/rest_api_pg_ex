const { database } = require('pg/lib/defaults');

const Pool = require('pg').Pool;

const pool = new Pool({
    user:"postgres",
    password:"blue1151",
    database:"todo_database",
    host:"localhost",
    port:5432
});

module.exports = pool;