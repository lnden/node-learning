const jade = require('jade');
const fs = require('fs');

let str = jade.render('html');
console.log(str);

// 侵入式的模板

// let str = jade.renderFile('./views/1.jade',{pretty:true});

// fs.writeFile('./build/1.html',str,function(err){
// 	if(err)
// 		console.log('写入失败')
// 	else
// 		console.log('写入成功')
// })