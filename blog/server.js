const express = require('express');
const expressStatic = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const consolidate = require('consolidate');
//本次主要使用mysql配合blog表
const mysql = require('mysql');
const server = express();

const db = mysql.createConnection({
	host:'localhost',
	// port:3306,
	user:'root',
	password:'123456',
	database:'blog'
})


// 1.解析 cookie
server.use(cookieParser('qwqwqwqwwq'))

// 2.使用 session
var arr = [];
for(var i=0;i<100000;i++){
	arr.push('keys'+Math.random())
}
server.use(cookieSession({
	name:'sessionsId',
	keys:arr,
	maxAge:30*24*3600*1000
}))

// 3.使用body-parser获取post请求,限制2M
server.use(bodyParser.urlencoded({
	extended:false,
	limit:2*1024*1024
}));

// 4.使用 consolidate模板引擎集合
server.set('view engine','html');
server.set('views','/views');
server.engine('html',consolidate.ejs);


/** 接收用户请求 */



// 5.使用 express-static处理静态文件
server.use(expressStatic('./www'))
server.listen(8088,()=>console.log('Server runing at http://localhost:8088···'));