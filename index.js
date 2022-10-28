const express = require('express')
const cors = require('cors')
const morgan = require('morgan');
const bodyParser=require('body-parser')
const dotenv=require('dotenv')
const authentification=require('./Routes/AuthRoutes')
const user=require('./Routes/ClientRoutes')
/**
 * 
 */

dotenv.config()
require('./Passport/bearer')
require('./DataBase/Connect')
/**
 * 
 */
const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json()) ;

/**
 * 
 */

app.use(authentification)
app.use(user)



/**
 * Serving port
 */
app.listen(4000, function () {
    console.log('web server listening on port 4000')
  })