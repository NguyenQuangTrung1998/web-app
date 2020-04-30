var express = require('express');
var multer  = require('multer');
var router = express.Router();
var createMiddleware = require('../middleware/create-middleware');
var userController = require('../controller/user-controller');
var upload = multer({ dest: './public/uploads/' })

router.get('/create',function(req,res){
	res.render('users/create');
});
router.post('/create', upload.single('avatar'),
	createMiddleware.examine,
	userController.postCreate);
router.get('/search',userController.search)
router.get('/:id',userController.id);

router.get('/',userController.index);
module.exports = router;