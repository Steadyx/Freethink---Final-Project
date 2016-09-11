var router = require('express').Router(),
  jwt = require('jsonwebtoken'),
  secret = require('./secrets'),
  usersController = require('../controllers/users'),
  authController = require('../controllers/authController');

function secureRoute(req, res) {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: 'Unauthorized'
    })
  }
  var token = req.headers.authorization.replace('Bearer', '');

  jwt.verify(token, secret, function(err, payload) {
    if (err || !payload) {
      return res.status(401).json({
        message: 'Unauthorized'
      });
      req.user = payload;
      next();

    }

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

module.exports = router;
