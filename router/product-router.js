var express = require('express');
var router = express.Router();
var productRouter = require('../controller/product-controller');

router.get('/product',productRouter.index);

module.exports = router;