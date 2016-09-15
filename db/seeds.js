var mongoose = require('mongoose');
var User = require('../models/user');
var Idea = require('../models/idea');

var databaseUri = require('../config/db')('development');
mongoose.connect(databaseUri);

User.collection.drop();
Idea.collection.drop();


Idea.create([{

    title: 'Idea One',
    body: 'I am trying to get this to work!',

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work! 1'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work! 2'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work! 3'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work! 4'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work! 5'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work! 6'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work! 7'

  }, {

    title: 'Idea One',
    body: 'I am trying to get this to work! 8'

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
      }, {
        name: 'Test2',
        email: 'test2@gmail.com',
        password: "password",
        passwordConfirmation: "password",
        ideas: ideas
      }, {
        name: 'Test3',
        email: 'test3@gmail.com',
        password: "password",
        passwordConfirmation: "password",
        ideas: ideas
      }, {
        name: 'Test4',
        email: 'test4@gmail.com',
        password: "password",
        passwordConfirmation: "password",
        ideas: ideas
      }, {
        name: 'Test5',
        email: 'test5@gmail.com',
        password: "password",
        passwordConfirmation: "password",
        ideas: ideas
      }, {
        name: 'Test6',
        email: 'test6@gmail.com',
        password: "password",
        passwordConfirmation: "password",
        ideas: ideas
      }, {
        name: 'Test7',
        email: 'test7@gmail.com',
        password: "password",
        passwordConfirmation: "password",
        ideas: ideas
      }, {
        name: 'Test8',
        email: 'test8@gmail.com',
        password: "password",
        passwordConfirmation: "password",
        ideas: ideas
      }, {
        name: 'Test9',
        email: 'test9@gmail.com',
        password: "password",
        passwordConfirmation: "password",
        ideas: ideas
      }, {
        name: 'Test10',
        email: 'test10@gmail.com',
        password: "password",
        passwordConfirmation: "password",
        ideas: ideas
      }, {
        name: 'Test11',
        email: 'test11@gmail.com',
        password: "password",
        passwordConfirmation: "password",
        ideas: ideas
      }, {
        name: 'Test12',
        email: 'test12@gmail.com',
        password: "password",
        passwordConfirmation: "password",
        ideas: ideas
      }, {
        name: 'Test13',
        email: 'test13@gmail.com',
        password: "password",
        passwordConfirmation: "password",
        ideas: ideas
      }, {
        name: 'Test14',
        email: 'test14@gmail.com',
        password: "password",
        passwordConfirmation: "password",
        ideas: ideas
      }, {
        name: 'Test15',
        email: 'test15@gmail.com',
        password: "password",
        passwordConfirmation: "password",
        ideas: ideas
      }, {
        name: 'Test16',
        email: 'test16@gmail.com',
        password: "password",
        passwordConfirmation: "password",
        ideas: ideas
      }],
      function(err, user) {
        console.log(user);
        mongoose.connection.close();
      })
  });
