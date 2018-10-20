const express = require('express');
const server = express();

// 1.使用get方式获取内容 req.query

server.use('/',(req,res)=>{
    console.log(req.query)  //{ username: 'admin', password: '123456' }
})

server.listen(8088,()=>console.log('Server runing at http://localhost:8088···'))