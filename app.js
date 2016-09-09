var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var cors = require('cors');
var bluebird = require('bluebird');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({

  extended: true

}));

app.use(express.static('public'));

app.listen(port, function() {

  console.log('Express is listening on port ' + port);

});
