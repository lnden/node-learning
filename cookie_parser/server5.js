const express= require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const server = express();

// 使用cookie-session

server.use(cookieParser());
server.use(cookieSession({
	name: 'sess',
	keys: ['aa','bb','cc'],
	maxAge: 2*3600*1000 //2H
}));

server.use('/',(req,res)=>{
	// Session {}
	console.log(req.session) 

	res.send();
})

server.listen(8088,()=>console.log('Server runing at http://localhost:8088···'))