# Express / PostgreSQL

## Database Connection
Add these to environment variables

PGUSER=netuser<br>
PGHOST=localhost<br>
PGPASSWORD=netpass<br>
PGDATABASE=netdb<br>
PGPORT=5432

And then the database.js can be like this 

const Pool = require('pg').Pool;<br>
const dotenv = require('dotenv');<br>
dotenv.config();<br>
const connection = new Pool();<br>
module.exports = connection;<br>

## Another version
Add this to environment variables

DATABASE_URL = "postgres://netuser:netpass@localhost:5432/netdb"

And then the database.js can be like this 

const dotenv = require('dotenv');<br>
dotenv.config();<br>
const pg=require('pg');<br>
const pgClient= new pg.Client(process.env.DATABASE_URL);<br>

pgClient.connect();<br>
module.exports = pgClient;<br>

## Heroku

Above versions didn't work in Heroku (with Heroku Postgress) anymore, so I had to write this to the database.js 

require("dotenv").config();<br>
const { Pool } = require('pg');<br>
const pool = new Pool({<br>
  connectionString: process.env.DATABASE_URL,<br>
  ssl: {<br>
    rejectUnauthorized: false<br>
  }<br>
});<br>
module.exports = pool;

<hr>

Also this version of database.js works 

const Pool = require("pg").Pool;<br>
require("dotenv").config();<br>
const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;<br>

const pool = new Pool({<br>
    connectionString,<br>
    ssl: {<br>
        rejectUnauthorized: false,<br>
    },<br>
});<br>
module.exports = pool;

And then add below variables to enviroment variables in Heroku 
PG_USER<br>
PG_HOST<br>
PG_PASSWORD<br>
PG_DATABASE<br>
PG_PORT<br>



