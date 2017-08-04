// dependencies ================================================
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mysql = require('mysql');
var exphbs = require("express-handlebars");

// declare port ================================================
var app = express();
app.set('port', (process.env.PORT || 5000));

// body parser =================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// Listen ======================================================
app.listen(app.get('port'), function(){
	console.log("Listening on port " + app.get('port'));
});