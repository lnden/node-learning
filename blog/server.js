const express = require('express');
const expressStatic = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const consolidate = require('consolidate');
//本次主要使用mysql配合blog表
const mysql = require('mysql');
const server = express();
const common = require('./libs/common')

// const db = mysql.createConnection({
const db = mysql.createPool({   //连接池
	host:'localhost',
	// port:3306,
	user:'root',
	password:'123456',
	database:'blog'
})


// 1.解析 cookie
server.use(cookieParser('qwqwqwqwwq'))

// 2.使用 session
var arr = [];
for(var i=0;i<100000;i++){
	arr.push('keys'+Math.random())
}
server.use(cookieSession({
	name:'sessionsId',
	keys:arr,
	maxAge:30*24*3600*1000
}))

// 3.使用body-parser获取post请求,限制2M
server.use(bodyParser.urlencoded({
	extended:false,
	limit:2*1024*1024
}));

// 4.使用 consolidate模板引擎集合
server.set('view engine','html');
server.set('views','./template');
server.engine('html',consolidate.ejs);




/** 接收用户 */
server.use('/',(req,res,next)=>{
	//使用next(),查询banner
	db.query('SELECT * FROM banner_table',(err,data)=>{
		if(err){
			res.status(500).send('database error').end();
			// console.error(err)
		}else{
			// res.render('index.ejs',{banners:data});
			// console.log(data)
			res.banners = data;
			next();
		}
	})
})
server.get('/',(req,res,next)=>{
	//查询article
	// console.log(res.banners)
	db.query('SELECT ID,title,summary FROM article_table',(err,data)=>{
		if(err){
			res.status(500).send('database error').end();
			// console.error(err)
		}else{
			// res.render('index.ejs',{articles:data});
			// console.log(data)
			res.articles = data;
			next()
		}
	})
})
server.get('/',(req,res)=>{
	//查询article
	// console.log(res.banners)
	// console.log(res.articles)
	res.render('index.ejs',{banners:res.banners,articles:res.articles})
})

server.use('/article',(req,res)=>{
	if(req.query.id){
		if(req.query.act=='like'){
			//给文章增加一个赞
			db.query(`UPDATE article_table SET n_like=n_like+1 WHERE ID=${req.query.id}`,(err,data)=>{
				if(err){
					res.status(500).send('数据库小问题').end();
				}else{
					//显示文章
					db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`,(err,data)=>{
						if(err){
							res.status(500).send('数据库有问').end();
						}else{
							if(data.length==0){
								res.status(404).send('您请求的文章找不到').end();
							}else{
								res.status(200);
								var articleData = data[0];
								articleData.sDate = common.time2date(articleData.post_time);
								articleData.content = articleData.content.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
								res.render('conText.ejs',{article_data:data[0]})
							}
						}
					})
				}
			})
		}else{
			//显示文章
			db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`,(err,data)=>{
				if(err){
					res.status(500).send('数据库有问').end();
				}else{
					if(data.length==0){
						res.status(404).send('您请求的文章找不到').end();
					}else{
						res.status(200);
						var articleData = data[0];
						articleData.sDate = common.time2date(articleData.post_time);
						articleData.content = articleData.content.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
						res.render('conText.ejs',{article_data:data[0]})
					}
				}
			})
		}
	}else{
		res.status(404).send('您请求的文章找不到').end();
	}
})


// 5.使用 express-static处理静态文件
server.use(expressStatic('./www'))
server.listen(8088,()=>console.log('Server runing at http://localhost:8088···'));