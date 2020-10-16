const express = require('express')
const app = express()
const helmet = require('helmet');

process.env.TZ = 'America/Sao_Paulo';
/**
 * setting up the templating view engine
 */ 
app.set('view engine', 'ejs')


/**
 * body-parser module is used to read HTTP POST data
 * it's an express middleware that reads form's input 
 * and store it as javascript object
 */ 
const bodyParser = require('body-parser')
/**
 * bodyParser.urlencoded() parses the text as URL encoded data 
 * (which is how browsers tend to send form data from regular forms set to POST) 
 * and exposes the resulting object (containing the keys and values) on req.body.
 */ 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static('./public'))
app.use(helmet())

/**
 * IMPORT ROUTES
 */ 
const home = require('./routes/home')

/**
 * DEFINED ROUTES
 */
app.use('/', home)

app.listen(3000, function(){
	console.log('Server running at port 3000: http://127.0.0.1:3000')
})