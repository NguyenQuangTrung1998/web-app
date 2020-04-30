var cartModel = require('../models/session-model');

module.exports.addToCart = function(req,res,next){
	var productId = req.params.productId;
	var sessionId = req.signedCookies.sessionId;
	if(!sessionId){
		res.redirect('/products/product');
		return;
	}
	 cartModel.findOne({_id: productId}).set('cart.'+ productId,1);
	 res.redirect('/products/product');

	next();
}