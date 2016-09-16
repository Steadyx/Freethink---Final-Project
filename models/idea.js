var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

Schema = mongoose.Schema;

var IdeaSchema = new Schema({

  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }


});

module.exports = mongoose.model('Idea', IdeaSchema);
