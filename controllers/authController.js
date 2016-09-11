var User = require('../models/user'),
  jwt = require('jsonwebtoken'),
  secret = require('../config/secrets').secret;

function register(req, res) {

  User.create(req.body, function(err, user){

    if(err) {
      return res.status('400').json(err);
    }

    var payload = {

      id: user._id,
      name: user.name

    };

    var token = jwt.sign(payload, secret, {
      expiresIn: 60 * 60 * 24
    })

    return res.status(200).json({
      message: "Success",
      token: token
    })
  })

}

function login(req, res) {

  User.findOne({
    email: req.body.email

  }, function(err, user) {

    if(err) {
      res.send(500).json(err)
    };
    if(!user.validatePassword(req.body.password)){
      return res.status(401).json({
        message: 'Invalid Credentials'
      });
    }
    var payload = {
      _id: user._id,
      name: user.name
    };
    var token = jwt.sign(payload, secret, {

      expiresIn: 60 * 60 * 24

    })
    return res.status(200).json({
      message: 'Success',
      token: token
    })
  })

}

module.exports = {

  register: register,
  login: login

}
