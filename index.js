require('dotenv').config();
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
var port = 3000;
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect(process.env.url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected');
});

var loginMiddleware = require('./middleware/auth-middleware');
var sessionMiddleware = require('./middleware/session-middleware');
var authRouter = require('./router/auth-router');
var userRouter = require('./router/user-router');
var productRouter = require('./router/product-router');
var basketRouter = require('./router/cart-router');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'pug');


app.use(cookieParser(process.env.session_secret));
app.use(sessionMiddleware);
app.get('/',function(req,res){
	res.render('index');
});

app.use('/cart',basketRouter);
app.use('/auth',authRouter);
app.use('/users',loginMiddleware.signCookie,userRouter);
app.use('/products',productRouter);

app.listen(port,function(){
	console.log('server port'+port);
});
