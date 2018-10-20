const ejs = require('ejs');

ejs.renderFile('./views/2.ejs',{json:{arr:[
        {user:'lnden',pass:'123456'},
        {user:'lily',pass:'654321'},
        {user:'lucy',pass:'999999'}
    ]
}},(err,data)=>{
    console.log(data)
})

// 2.ejs    [ object,array ] 可以输出对象下某值，循环数组