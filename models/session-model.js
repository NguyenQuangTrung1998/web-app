var mongoose = require("mongoose");
var sessionSchema = new mongoose.Schema({});
var session = mongoose.model('sessionId',sessionSchema,'session');
module.exports = session;
