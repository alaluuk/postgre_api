const Pool = require('pg').Pool;
const dotenv = require('dotenv');
dotenv.config();
const connection = new Pool();
module.exports = connection;