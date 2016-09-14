var mongoose = require('mongoose');
var User = require('../models/user');
var Idea = require('../models/idea');

var databaseUri = require('../config/db')('development');
mongoose.connect(databaseUri);

User.collection.drop();
Idea.collection.drop();


Idea.create([{

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work!'

  }, ],
  function(err, ideas) {
    if (err) {
      console.log("Error on user create!", err);
      return mongoose.connection.close();
    }
    User.create([{
      name: 'Test',
      email: 'test@gmail.com',
      password: "password",
      passwordConfirmation: "password",
      ideas: ideas
    }], function(err, users) {
      console.log(users);
      mongoose.connection.close();
    })
  });
