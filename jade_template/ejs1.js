const ejs = require('ejs');

ejs.renderFile('./views/1.ejs',{name:'lnden'},function(err,data){
    if(err){
        console.log('编译失败')
    }else{
        console.log('编译成功',data)
    }
})