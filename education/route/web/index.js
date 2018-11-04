const express = require('express');
const mysql = require('mysql');

var db = mysql.createPool({host:'localhost',user:'root',password:'123456',database:'learn'})

module.exports = function(){
	let router = express.Router();
	
	router.get('/get_banners',(req,res)=>{
		db.query(`SELECT * FROM banner_table`,(err,data)=>{
			if(err){
				console.error(err);
				res.status(500).send('database error').end();
			}else{
				console.log(data)
				res.status(200).send(data).end();
			}
		})
	})
	router.get('/get_custom',(req,res)=>{
		db.query(`SELECT * FROM custom_evaluation_table`,(err,data)=>{
			if(err){
				console.error(err);
				res.status(500).send('database error').end();
			}else{
				console.log(data)
				res.status(200).send(data).end();
			}
		})
	})
	
	return router
}


// 前端接口文档
// 1. get_banners   =>    [{ID,title,description,href}]
// 2. get_custom    =>    [{ID,title,descriptioon,src}]