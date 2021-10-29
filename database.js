const dotenv = require('dotenv');
dotenv.config();
const pg=require('pg');
const pgClient= new pg.Client(process.env.DATABASE_URL);

pgClient.connect();
module.exports = pgClient;

