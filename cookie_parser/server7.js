const express= require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const server = express();

// 3.循环添加keys
// 
var arr = []
for(var i=0;i<100000;i++){
	arr.push('sig'+Math.random())
}
server.use(cookieParser());
server.use(cookieSession({
	name: 'sess',
	keys: arr,
	maxAge: 2*3600*1000 //2H
}));

server.use('/',(req,res)=>{
	if(req.session['count']==null){
		req.session['count'] = 1;
	}else{
		req.session['count']++;
	}
	console.log(req.session['count'])

	//删除session  delete req.session
	res.send('ok');
})

server.listen(8088,()=>console.log('Server runing at http://localhost:8088···'))