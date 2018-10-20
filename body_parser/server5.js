const express = require('express');
const myBodyParser = require('./libs/my-body-parser')
const server = express();

// 5.优化使用(my-body-parser)中间件

// server.use(myBodyParser());
server.use(myBodyParser.urlencoded());

server.use('/',(req,res)=>{
    console.log(req.body)
})

server.listen(8088,()=>console.log('Server runing at http://localhost:8088···'))