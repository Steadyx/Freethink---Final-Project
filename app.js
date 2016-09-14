var express = require('express'),
  mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  bluebird = require('bluebird'),
  bodyParser = require('body-parser'),
  cors = require('cors');

app = express();

var environment = app.get('env');

var routes = require('./config/routes');
var databaseURI = require('./config/db')(environment);


var port = process.env.PORT || 3000;


mongoose.connect(databaseURI);

mongoose.Promise = bluebird;
// If the connection is successful
mongoose.connection.on('connected', function() {
  console.log('Mongoose default connection open to ' + databaseURI);
});

// If the connection throws an error
mongoose.connection.on('error', function(err) {
  console.log('Mongoose default connection error: ' + err);
});

if ('test' !== environment) {
  app.use(require('morgan')('dev'));
}

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({

  extended: true

}));

// app.use('/bower_components',
//   express.static(__dirname + '/bower_components'));

app.use(express.static('public'));

app.use('/api', routes);


app.listen(port, function() {

  console.log('Express is listening on port ' + port);

});

module.exports = app;
