var User = require('../models/user');

function usersIndex(req, res) {
  User.find(function(err, users) {
    if (err) {
      return res.status(500).json(err);

    }else{
      return res.status(200).json(users);
    }
  });
}

module.exports = {
  index: usersIndex
}
