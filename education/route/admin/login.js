const express = require('express');
const mysql = require('mysql');
const common = require('../../libs/common')
var db = mysql.createPool({
	host:'localhost',
	// port:'3306',
	user:'root',
	password:'123456',
	database:'learn'
})


module.exports = function(){
	var router = express.Router();

	router.get('/',(req,res)=>{
		res.render('admin/login.ejs',{});
	})
	router.post('/',(req,res)=>{
		// console.log(req.body)
		var username = req.body.username;
		var password = common.md5(req.body.password+common.MD5_SUFFIX);
		// console.log(password)
		db.query(`SELECT * FROM admin_table WHERE username='${username}'`,(err,data)=>{
			if(err){
				console.error(err);
				res.status(500).send('database error').end();
			}else{
				if(data.length==0){
					res.status(400).send('no this admin').end();
				}else{
					if(data[0].password == password){
						req.session['admin_id'] = data[0].ID;
						res.redirect('/admin')
					}else{
						res.status(400).send('this password is incorrect').end();
					}
				}
			}
		})
	})

	return router;
}