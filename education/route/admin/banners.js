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

	router.get('/',(req,res)=>{
		switch(req.query.act){
			case 'mod':
			db.query(`SELECT * FROM banner_table WHERE ID=${req.query.id}`,(err,data)=>{
				if(err){
					console.error(err);
					res.status(500).send('database error').end();
				}else if(data.length==0){
					res.status(404).send('data not fount').end();
				}else{
					db.query(`SELECT * FROM banner_table`,(err,banners)=>{	
						if(err){
							console.error(err);
							res.status(500).send('database error').end();
						}else{
							res.render('admin/banners.ejs',{banners,mod_data:data[0]});
						}
					})
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
	router.post('/',(req,res)=>{
		let title = req.body.title;
		let description = req.body.description;
		let href = req.body.href;
		if(!title || !description || !href){
			res.status(400).send('arg error').end();	
		}else{
			//修改逻辑
			if(req.body.mod_id){
				db.query(`UPDATE banner_table SET title="${req.body.title}",description="${req.body.description}",href="${req.body.href}" WHERE ID=${req.body.mod_id}`,(err,data)=>{
					if(err){
						console.error(err);
						res.status(500).send('database error').end();
					}else{
						res.redirect('/admin/banners');
						// res.status(200).send('成功了').end();
					}
				})
			}else{
			//添加逻辑
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
		}
	})

	return router;
}