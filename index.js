var express 	= require('express');
var bodyParser 	= require('body-parser');
var morgan 		= require('morgan'); // HTTP request logger middleware
var compression = require('compression'); // HTTP request compressor
var favicon 	= require('serve-favicon'); // Favicon handler
var methodOverride = require('method-override'); // Override HTTP verbs.
var config 		= require('./config');
var app 		= express();
var modelsPath	= config.root + '/app/models';
var fs 			= require('fs');
var caminte		= require('caminte'), Schema = caminte.Schema, db;

// Database connection
try {
	db = new Schema(config.db.driver, config.db);
	app.models = {};
}
catch (e){
	console.error("\x1b[31m", e.message, "\x1b[34m")
}

// requiring all models from the /app/models folder
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
  	var name = file.replace(/\.js$/i, '');
    app.models[name] = require(modelsPath + '/' + file)(db);
  }
});

// ------ Express Configuration ----------------
app.use(compression());
app.use(express.static(config.root + '/public'));
app.set('port', config.port);
app.use(favicon(config.root + '/public/favicon.ico'));

// request logger
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Routes
require('./config/routes')(app);

app.listen(config.port);

console.log("Server listening on localhost:" + config.port);