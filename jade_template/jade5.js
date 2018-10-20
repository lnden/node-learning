const jade = require('jade');

var str = jade.renderFile('./views/5.1.jade',{pretty:true});

console.log(str)

// 5.1      [ if slse ] if else的使用