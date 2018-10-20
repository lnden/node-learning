const express = require('express');
const server = express();
const myBodyParser = require('./libs/my-body-parser')

// 4.抽取(body-parser)中间件

server.use(myBodyParser);

server.use('/',(req,res)=>{
    console.log(req.body)
})

server.listen(8088,()=>console.log('Server runing at http://localhost:8088···'))
