const express = require('express');
const cookieParser = require('cookie-parser');
const server = express();

// 2.使用 cookie-parser 读取cookie信息
// 在/user 上使用cookie 在/user/*.html目录都可以响应

server.use(cookieParser());

server.use('/',(req,res)=>{
	console.log(req.cookies);
	res.send('ok');
})

server.listen(8088,()=>console.log('Server runing at http://localhost:8088···'))