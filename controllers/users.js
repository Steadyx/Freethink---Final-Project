var User = require('../models/user');
var Promise = require('bluebird');

function usersIndex(req, res) {

  User.find()
    .populate('ideas')
    .exec(function(err, users) {

      if (err) {
        return res.status(500).json(err);

      } else {
        return res.status(200).json(users);
      }
    });

}

function usersShow(req, res) {
  User.findById(req.params.id)
    .populate('ideas friends') 
    .exec(function(err, users) {
      if (err) {
        return res.status(500).json(err);
      }
      if (!users) {
        return res.status(404).json({
          message: "Could not find a user with that id"
        });
      }
      return res.status(200).json(users);
    });
}

function befriend(req, res) {

  User.findById(req.params.id)
    .then(function(user) {
      return User.findById(req.params.friendId)
        .then(function(friend) {
          if(user.friends.indexOf(friend._id) === -1) {
            user.friends.push(friend._id);
          }

          if(friend.friends.indexOf(user._id) === -1) {
            friend.friends.push(user._id);
          }

          return Promise.all([
            user.save(),
            friend.save()
          ]);
        });
    })
    .then(function(users) {
      return User.findById(users[0]._id)
        .populate('friends');
    })
    .then(function(user) {
      res.status(200).json(user);
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).json(err);
    })

}


module.exports = {
  index: usersIndex,
  show: usersShow,
  befriend: befriend
}
