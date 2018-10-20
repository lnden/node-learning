const ejs = require('ejs');

ejs.renderFile('./views/5.ejs',{},(err,data)=>{
    console.log(data)
})

// 5.ejs    [ include ] 引入输出