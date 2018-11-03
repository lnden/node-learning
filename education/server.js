const express = require('express');
const expressStatic = require('express-static');
const bodyParser = require('body-parser');
const multer = require('multer');
const multerObj = multer({dest:'./static/upload'})
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const consolidate = require('consolidate');
const server = express();


//1.获取请求数据
//get自带
server.use(bodyParser.urlencoded());
server.use(multerObj.any());
//2.cookie、session
server.use(cookieParser())

// (function(){
	var keys = [];
	for(var i=0;i<100000;i++){
		keys[i] = 'a_'+Math.random();
	}
	server.use(cookieSession({
		name:'sessionId',
		keys:keys,
		maxAge:20*60*1000
	}))
// })()

//3.模板
server.set('view engine','html');
server.set('views','template');
server.engine('html',consolidate.ejs);

//4.route
// server.use('/article',require('./route/1.js')());
// server.use('/blog',require('./route/2.js')());
server.use('/',require('./route/web.js')())
server.use('/admin',require('./route/admin/index.js')())

//5.default static
server.use(expressStatic('./static'))





server.listen(8088,()=>console.log('Server runing at http://localhost:8088···'));