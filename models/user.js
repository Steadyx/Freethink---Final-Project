var mongoose = require('mongoose');
var bcrypt = require('bcrypt');


Schema = mongoose.Schema;

var UserSchema = new Schema({

  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  ideas: [{
    type: Schema.Types.ObjectId,
    ref: 'Idea'
  }],
  friends: [{
    type: Schema.ObjectId,
    ref: "User"
  }],
  passwordHash: {
    type: String,
    required: true
  }

});

UserSchema.set('toJSON', {
  transform: function(document, json) {
    delete json.passwordHash;
    delete json.__v;
    return json;
  }
});

UserSchema.virtual('password')
  .set(function(password) {
    // save on the object, in case we need it later
    this._password = password;

    // hash the password and save on the passwordHash property
    this.passwordHash = bcrypt.hashSync(this._password, bcrypt.genSaltSync(8));
  });

UserSchema.virtual('passwordConfirmation')
  .get(function() {
    return this._passwordConfirmation;
  })
  .set(function(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

UserSchema.path('passwordHash')
  .validate(function(passwordHash) {
    if (this.isNew) {

      if (!this._password) {
        return this.invalidate('password', 'A password is required');
      }

      if (this._password !== this._passwordConfirmation) {
        return this.invalidate('passwordConfirmation', 'Passwords do not match');
      }
    }
  });

UserSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash);
}

// var Idea = mongoose.model('User', UserSchema);
// Idea.findOne(_id)
//   .populate('ideas')
//   .exec(function(err, post) {
//   console.log(post);
// });

module.exports = mongoose.model('User', UserSchema);
