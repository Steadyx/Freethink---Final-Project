var User = require('../models/user');

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
    .populate('ideas')
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

module.exports = {
  index: usersIndex,
  show: usersShow
}
