var userModel = require('../models/user-model');
module.exports.signCookie = async function(req,res,next){
	if(!req.signedCookies.userid){
		res.redirect('/auth');
		return;
	}
	var user = await userModel.findOne({_id: req.signedCookies.userid});
	if(!user){
		res.redirect('/auth');
		return;
	}
	res.locals.user = user;
	next();

}