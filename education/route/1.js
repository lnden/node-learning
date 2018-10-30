const express = require('express');

module.exports = function(){
	var router = express.Router();
	
	 router.get('/1.html',function(req,res){
		res.render('./1.ejs',{a:2,b:3});
		// res.end();
	})
	router.get('/2.html',function(req,res){
		res.send('我是文章2');
		res.end();
	})
	return router
}