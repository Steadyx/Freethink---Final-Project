var mongoose = require('mongoose'),
    User = require('User');
  Schema = mongoose.Schema;

var FriendsSchema = new Schema({
  users: [User.ObjectId],
  confirmed: {
    type: Boolean,
    default: false,
    index: true
  },

  created: {
    type: Date,
    default: Date.now
  }

});


FriendsSchema.index({
  users: 1
}, {
  unique: true
});

module.exports = mongoose.model('Friends', FriendsSchema);
