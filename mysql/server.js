const mysql = require('mysql');

// console.log(mysql)

// 1.连接到服务器
// 2.查询(发送请求)

// 1.连接createConnection({})
// 		1).那一台服务器
// 		2).用户名
// 		3).密码
// 		3).库

var db = mysql.createConnection({
	host:'localhost',
	// port:3306,
	user:'root',
	password:'123456',
	database:'20181016'
})

// console.log(db)
// 
// 2.查询
// 			1).增删改查(告诉服务器你要干什么)
var res = []
db.query('SELECT * FROM user_table',(err,data)=>{
	if(err){
		console.log('出错了',err)
	}else{
		// console.log('成功了',data)
		// console.log(JSON.stringify(data))
		res = JSON.stringify(data);
		console.log(res)
	}
})
