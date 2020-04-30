var sessionModel = require('../models/session-model');
module.exports = function(req,res,next){
	if(!req.signedCookies.sessionId){
		res.cookie('sessionId', sessionModel.id,{
			signed:true
		});
		sessionModel.create(req.body,function(err,success){
			if(err) return handleError(err);
		});
	}
	next();
}