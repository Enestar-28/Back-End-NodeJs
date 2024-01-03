const express = require('express')

const morgan = require('morgan')
const dotenv = require('dotenv')
const helmet = require('helmet')    // for security purpose
const conpress = require('compression') // for compressing the data

const app = express()

//init middleware

app.use(morgan('dev'))
app.use(helmet())
app.use(conpress())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// init db 
require('./src/dbs/init.mongodb')
// check connect to mongodb

// init routes
app.use('/', require('./src/routes'))

// init server

// init socket
// init socket events
// init socket middleware

module.exports = app
