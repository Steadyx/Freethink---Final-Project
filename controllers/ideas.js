var Idea = require('../models/idea');
var User = require('../models/user');

function ideasIndex(req, res) {
  Idea.find()
      .populate('user')
      .exec(function(err, ideas) {
    if (err) {
      return res.status(500).json(err);

    } else {
      return res.status(200).json(ideas);
    }
  });
}

function ideasCreate(req, res) {
  req.user = req.body.user;
  // console.log(req.body);
  // console.log(req.body.user);
  Idea.create(req.body)
    .then(function(idea) {
      return User.findById(req.user)
        .then(function(user) {
          console.log(user);
          user.ideas.push(idea);
          console.log(user);
          return user.save();
        })
        .then(function() {
          res.status(200).json(idea);
        })
        .catch(function(err) {
          res.status(500).json(err);
        });
    })
}

function ideasShow(req, res) {
  Idea.findById(req.params.id)
      .populate('user')
      .exec(function(err, ideas) {
    if (err) return res.status(500).json(err);
    if (!ideas) return res.status(404).json({
      message: "Could not find a idea with that id"
    });
    return res.status(200).json(ideas);
  });
}

function ideasUpdate(req, res) {
  Idea.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    .then(function(idea) {
      res.status(200).json(idea);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
}

function ideasDelete(req, res) {
  Idea.findByIdAndRemove(req.params.id)
    .then(function() {
      res.status(204).end();
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
}


module.exports = {
  index: ideasIndex,
  create: ideasCreate,
  show: ideasShow,
  update: ideasUpdate,
  delete: ideasDelete

}
