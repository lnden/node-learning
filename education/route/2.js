const express = require('express');

module.exports = function(){
	var router = express.Router();
	
	router.get('/a.html',function(req,res){
		res.send('我是blog1');
		res.end();
	})
	router.get('/b.html',function(req,res){
		res.send('我是blog2');
		res.end();
	})
	return router
}