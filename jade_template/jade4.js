const jade = require('jade');

var str = jade.renderFile('./views/4.1.jade',{pretty:true,
	arr: ['aaa','bbb','ccc'],
	content:"<h2>你好啊</h2><p>打算的空间啊圣诞节啊</p>"
});

console.log(str)

// 4.1		[ -for ] for循环 div #{arr[i]} || div=arr[i]
// 4.2		[ != ] 输出html标签(jade默认输出转译) div=content => div!=content