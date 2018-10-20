const jade = require('jade');

var str = jade.renderFile('./views/6.1.jade',{pretty:true});

console.log(str)

// 6.1      [ switch ] switch的使用方式
// -var a=12;
// case a
// 		when 1
// 			div aaa
// 		default
// 			|我是默认属性
// 			
// [-] 只使用一个就可以 5.1内 [-] 可以省略