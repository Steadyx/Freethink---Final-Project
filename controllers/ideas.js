var Idea = require('../models/idea');




function ideasIndex(req, res) {
  Idea.find(function(err, ideas) {
    if (err) {
      return res.status(500).json(err);

    }else{
      return res.status(200).json(ideas);
    }
  });
}

function ideasCreate(req, res) {
  Idea.create(req.body, function(err, ideas) {
    if (err) return res.status(400).json(err);
    return res.status(201).json(ideas);
  });
}

function ideasShow(req, res) {
  Idea.findById(req.params.id, function(err, ideas) {
    if (err) return res.status(500).json(err);
    if (!ideas) return res.status(404).json({
      message: "Could not find a idea with that id"
    });
    return res.status(200).json(ideas);
  });
}

module.exports = {
  index: ideasIndex,
  create: ideasCreate,
  show: ideasShow
}
