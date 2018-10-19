const express = require('express');
const server = express();

// 1.发送cookie,不安全4KB

server.use('/',(req,res)=>{
	res.cookie('flag','learing',{
		path:'/user',
		maxAge:30*24*3600*1000
	});
	res.send('ok')
})

server.listen(8088,()=>console.log('Server runing at http://localhost:8088···'))