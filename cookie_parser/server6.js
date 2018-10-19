const express= require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const server = express();

// 2.session可以修改名称添加过期时间并且加keys

server.use(cookieParser());
server.use(cookieSession({
	name: 'sess',
	keys: ['aa','bb','cc'],
	maxAge: 2*3600*1000 //2H
}));

server.use('/',(req,res)=>{
	if(req.session['count']==null){
		req.session['count'] = 1;
	}else{
		req.session['count']++;
	}
	console.log(req.session['count'])
	res.send('ok');
})

server.listen(8088,()=>console.log('Server runing at http://localhost:8088···'))