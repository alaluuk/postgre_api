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
