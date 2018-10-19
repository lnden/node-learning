const express = require('express');
const cookieParser = require('cookie-parser');
const server = express();

// 4.删除cookie

server.use(cookieParser());

server.use('/',(req,res)=>{
	res.clearCookie('user');
	res.send();
})

server.listen(8088,()=>console.log('Server runing at http:.//localhost:8088···'))