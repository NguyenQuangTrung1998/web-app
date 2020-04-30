
module.exports.examine = function(req,res,next){
	var errors = [];
	if(!req.body.email||!req.body.phone||!req.body.name||!req.body.password||!req.body.confirm)
	{
		errors.push('please enter full information');
	}
	if(req.body.password!=req.body.confirm){
		errors.push('the password is not the same');
	}
	if(errors.length){
		res.render('users/create',{
			errors: errors,
			values:req.body
		});
		return;
	}
	next();
}