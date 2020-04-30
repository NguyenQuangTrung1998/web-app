var express = require('express');
var router = express.Router();
var authController = require('../controller/auth-controller');

router.get('/',authController.login);
router.post('/',authController.postLogin);


module.exports = router;