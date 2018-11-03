const express = require('express');
const common = require('../../libs/common')

module.exports = function(){
	let router = express.Router();
	
	//1检查登录状态，没有cookie跳转到login(cookie不安全,使用session)
	router.use((req,res,next)=>{
		if(!req.session['admin_id'] && req.url!='/login'){//没有登录
			//简单从定向
			res.redirect('/admin/login');
		}else{
			next();
		}
	})
	router.get('/',(req,res)=>{
		// res.send('恭喜您登录了~').end();
		res.render('admin/index.ejs',{})
	})

	router.use('/login',require('./login')())
	router.use('/banners',require('./banners')())
	router.use('/blog',require('./blog')())
	router.use('/custom',require('./custom')())

	return router
}
