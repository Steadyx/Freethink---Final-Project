var mongoose = require('mongoose');
var User = require('../models/user');
var Idea = require('../models/brainstorm');

var databaseUri = require('../config/db')('development');
mongoose.connect(databaseUri);

User.collection.drop();

User.create([{

  name: 'Test3',
  email: 'test3@gmail.com',
  password: "password",
  passwordConfirmation: "password",
  ideas: Idea[0]
}], function(err, users) {
  Idea.create([{
    title: 'Idea Two',
    body: 'I am trying to get this to work',
    postedBy: User[0]
  }], function(err, ideas) {
    console.log(users.length + ' users created!!');
    console.log(ideas.length + ' ideas created!!');
    mongoose.connection.close();


  });
});
