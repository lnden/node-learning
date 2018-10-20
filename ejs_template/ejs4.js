const ejs = require('ejs');

ejs.renderFile('./views/4.ejs',{},(err,data)=>{
    console.log(data)
})

// 4.ejs    [ - ] =输出 修改为 -输出 