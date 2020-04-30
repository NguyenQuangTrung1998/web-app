
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
	avatar:String,
	name: String,
	email:String,
	phone:String,
	password:String
});
var user = mongoose.model('user',userSchema,'users');
module.exports = user;