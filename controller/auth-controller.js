var userModel = require('../models/user-model');
module.exports.login = function(req,res){
	res.render('auth/index');
}
module.exports.postLogin = async function(req,res){
	if(!req.body.email||!req.body.password){
		res.render('auth/index',{
			errors:["please login fully"],
			values:req.body
		});
		return;
	}
	 var user = await userModel.findOne({email:req.body.email});
	if(!user){
		res.render('auth/index',{
			errors:['user does not exist'],
			values:req.body
		});
		return;
	}
	if(user.password!==req.body.password){
		res.render('auth/index',{
			errors:['invalid password'],
			values:req.body
		});
		return;
	}
	res.cookie('userid', user.id,{
		signed: true
	});
	res.redirect('/users');

	
}