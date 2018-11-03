const express = require('express');
const common = require('../libs/common')
const mysql = require('mysql');
const db = mysql.createPool({
	host:'localhost',
	// port:'3306',
	user:'root',
	password:'123456',
	database:'learn'
})

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
	router.get('/login',(req,res)=>{
		res.render('admin/login.ejs',{});
	})
	router.post('/login',(req,res)=>{
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
	router.get('/',(req,res)=>{
		// res.send('恭喜您登录了~').end();
		res.render('admin/index.ejs',{})
	})
	router.get('/banners',(req,res)=>{
		switch(req.query.act){
			case 'mod':
			db.query(`SELECT * FROM banner_table WHERE=${req.query.id}`,(err,data)=>{
				if(err){
					console.error(err);
					res.status(500).send('database error').end();
				}else if(data.length==0){
					res.status(404).send('data not fount').end();
				}else{
					res.render('admin/banners.ejs',{mod_data:data[0]});
				}
			})
				break;
			case 'del':
			db.query(`DELETE FROM banner_table WHERE ID=${req.query.id}`,(err,data)=>{
				if(err){
					console.error(err);
					res.status(500).send('database error').end();
				}else{
					res.redirect('/admin/banners');
				}
			})
				break;
			default:
			db.query(`SELECT * FROM banner_table`,(err,banners)=>{
				if(err){
					console.error(err);
					res.status(500).send('database error').end();
				}else{
					res.render('admin/banners.ejs',{banners});
				}
			})
		}
	})
	router.post('/banners',(req,res)=>{
		let title = req.body.title;
		let description = req.body.description;
		let href = req.body.href;
		if(!title || !description || !href){
			res.status(400).send('arg error').end();	
		}else{
			db.query(`INSERT INTO banner_table (title,description,href) VALUES ('${title}','${description}','${href}')`,(err,data)=>{
				if(err){
					console.error(err);
					res.status(500).send('database error').end();
				}else{
					res.redirect('/admin/banners');
					// res.status(200).send('成功了').end();
				}
			})
		}
	})
	return router
}
