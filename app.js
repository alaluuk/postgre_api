var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bookRouter = require('./routes/book');
const cors = require('cors');
var app = express();
app.use(cors());

const basicAuth = require('express-basic-auth');
app.use(basicAuth( { authorizer: myAuthorizer, authorizeAsync:true, } ))


const dotenv = require('dotenv');
dotenv.config();

function myAuthorizer(username, password, cb){
    if(username===process.env.auth_user && password ===process.env.auth_pass){
        return cb(null, true);
    }
    else{
        return cb(null, false);
    }
}
const helmet = require('helmet');


app.use(helmet());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/book', bookRouter);

module.exports = app;