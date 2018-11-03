const express = require('express');
const mysql = require('mysql');
var db = mysql.createPool({
	host:'localhost',
	// port:'3306',
	user:'root',
	password:'123456',
	database:'learn'
})

module.exports = function(){
	var router = express.Router();

	router.get('/',(req.res)=>{})
	router.post('/',(req,res)=>{})

	return router;
}