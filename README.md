# Express / PostgreSQL

## Database Connection
Add these to environment variables
PGUSER=netuser<br>
PGHOST=localhost<br>
PGPASSWORD=netpass<br>
PGDATABASE=netdb<br>
PGPORT=5432

And then the database.js can be like this <br>
const Pool = require('pg').Pool;<br>
const dotenv = require('dotenv');<br>
dotenv.config();<br>
const connection = new Pool();<br>
module.exports = connection;<br>