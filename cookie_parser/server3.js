const express =require('express');
const cookieParser = require('cookie-parser');
const server = express();

// 3.cookie签名

// server.use(cookieParser());
server.use(cookieParser('qweqweqweqeqwe'));

server.use('/',(req,res)=>{
	req.secret = 'qweqweqweqeqwe';
	res.cookie('user','lnden',{signed:true});
	console.log('签名cookie：',req.signedCookies)
	console.log('所有的cookie：',req.cookies)

	res.send();
})

// 签名之后[ s%3Alnden.xG416UMxnzdoHwXHXFzgrnGaNe4OAo0Ff%2BUkFPAaOa4 ]
// 使用控制台解析  decodeURIComponent('s%3Alnden.xG416UMxnzdoHwXHXFzgrnGaNe4OAo0Ff%2BUkFPAaOa4')
server.listen(8088,()=>console.log('Server runing at http://localhost:8088···'))