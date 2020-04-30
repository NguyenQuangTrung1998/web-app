
var userModel = require('../models/user-model');
module.exports.index =async function(req,res){
	var users = await userModel.find();
	res.render('users/index',{
		users:users
	});
}
module.exports.postCreate = function(req,res){
	req.body.avatar = req.file.path.split("/").slice(1).join("/");
	userModel.create(req.body,function(error,success){
		if(error){
			return handleError(error);
		}
		return success;
	});
	res.redirect('/users');

}
module.exports.search =async function(req,res){
	var q=req.query.q;
	var users = await userModel.find();
	var usersFilter = users.filter(function(users){
		return users.name.toLowerCase().indexOf(q.toLowerCase())!==-1
	});
	res.render('users/index',{
		users:usersFilter
	});
}
module.exports.id = async function(req,res){
	var id = req.params.id;
	   var data = await userModel.findOne({_id:id});
	   	res.render('users/view',{
	   	user: data
	   });
		
}
