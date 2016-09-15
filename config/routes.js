var router = require('express').Router(),
  jwt = require('jsonwebtoken'),
  secret = require('./secrets').secret,
  usersController = require('../controllers/users'),
  ideasController = require('../controllers/ideas'),
  authController = require('../controllers/authController');

function secureRoute(req, res, next) {

  if (!req.headers.authorization) {
    return res.status(401).json({
      message: 'Unauthorized'
    })
  }

  var token = req.headers.authorization.replace('Bearer ', '');

  jwt.verify(token, secret, function(err, payload) {
    if (err || !payload) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = payload;
    next();

  });

}

router
  .post('/register',
    authController.register);

router
  .post('/login',
    authController.login);

router
  .route('/users')
  .all(secureRoute)
  .get(usersController.index);

router
  .route('/users/:id')
  .all(secureRoute)
  .get(usersController.show);

router
  .route('/users/:id/befriend/:friendId')
  .all(secureRoute)
  .post(usersController.befriend);

router
  .route('/ideas')
  .all(secureRoute)
  .get(ideasController.index)
  .post(ideasController.create);

router
  .all(secureRoute)
  .route('/ideas/:id')
  .get(ideasController.show)
  .post(ideasController.update)
  .delete(ideasController.delete);

module.exports = router;
