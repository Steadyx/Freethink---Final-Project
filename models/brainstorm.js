var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

Schema = mongoose.Schema;

var IdeasSchema = new Schema({

  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('Idea', IdeasSchema);
