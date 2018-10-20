const jade = require('jade');

var str = jade.renderFile('./views/3.1.jade',
    {   pretty:true,
        name:'lnden',
        a:12,
        b:5,
        json:{width:'数据库读取的',height:'客户端读取的'},
	    arr:['wwww','left-warp'],
    }
);

console.log(str);

// 3.1-3.2  [ | ] 竖线代表 原样输出
// 3.3-3.4  [ . ] 点代表下级和子级 原样输出
// 3.5      [ include ] 引入文件 后台编译 不会增加请求
// 3.6      [ #{name} ] 页面使用变量 #{name}
// 3.7      [ #{a+b} ] 页面不但可以输出变量 还能做出简单运算 #{a+b}
// 3.8      [ object array ] style/class可以使用json和array
// 3.9      [ - ] 代表一段代码 可以在jade里面直接定义变量 直接写js
// 3.10     [ = ] 变量赋值可以使用简写方式 span=a || span #{a}