const jade = require('jade');

var str = jade.renderFile('./views/2.1.jade',{pretty:true})

console.log(str)


//对应views文件为2.*

// 2.1      [ 层级 ] 根据缩进 规定层级
// 2.2      [ () ] 属性放在括号()里面 逗号(,)分隔
// 2.3      [ 空格 ] 添加内容 空一格直接往后写
// 2.4      [ 嵌套 ] div 下输出 aa
// 2.5      [ style ] 普通属性写法 || 用json(动态传递使用json)
// 2.6      [ class ] 普通属性写法 || 用数组(动态传递使用[])
// 2.7      [ 简写 ]
// 2.8      [ 简化操作 ]