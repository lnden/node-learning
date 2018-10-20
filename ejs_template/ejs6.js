const ejs = require('ejs');

ejs.renderFile('./views/6.ejs',{type:'user'},(err,data)=>{
    console.log(data)
})

// 6.ejs    [ include ] 使用 include 切换不同头部信息 type:'admin/user'
