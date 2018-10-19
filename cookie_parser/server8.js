const express= require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const server = express();

// 4.删除session
 
server.use(cookieParser());

server.use('/',(req,res)=>{
	delete req.session
	res.send('ok');
})

server.listen(8088,()=>console.log('Server runing at http://localhost:8088···'))