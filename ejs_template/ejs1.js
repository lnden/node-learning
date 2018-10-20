const ejs = require('ejs');

ejs.renderFile('./views/1.ejs',{name:'lnden'},(err,data)=>{
    if(err){
        console.log('编译错误');
    }else{
        console.log(data)
    }
})

// 1.ejs    [ 变量 ] 可以输出变量、对象里的内容、变量相加
//                 <%= name %>
//                 <%= object.name %>
//                 <%= 15+12 %>