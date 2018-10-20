const express = require('express');
const expressStatic = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const jade = require('jade');
const ejs = require('ejs');
const server = express();

// 0.1 在项目中灵活切换模板引擎
// 0.2 body-parser只能解析POST数据类 不能解析文件上传


// 1.解析cookie
server.use(cookieParser('wqwqwqwqwwqq'))//对cookie简单签名

// 2.使用session
var arr = []
for(var i=0;i<100000;i++){
    arr.push('keys_'+Math.random())
}
server.use(cookieSession({
    name:'sessionId',
    keys:arr,
    maxAge:30*24*3600*1000
}))

// 3.POST数据
server.use(bodyParser.urlencoded({
  extended:false,
    limit:2*1024*1024
}))

// 用户请求
server.use('/',(req,res,next)=>{
    console.log(req.query)
    console.log(req.body)
    console.log(req.cookies)
    console.log(req.session)
})

// 4.static数据
server.use(expressStatic('./www'));






server.listen(8088,()=>console.log('Server runing at http://localhost:8088···'));
