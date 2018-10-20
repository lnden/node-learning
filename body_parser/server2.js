const express = require('express');
const bodyParser = require('body-parser');
const server = express();

// 2.使用post方式获取内容 req.body  需要引入body-parser中间件

server.use(bodyParser.urlencoded({}));

server.use('/',(req,res)=>{
    // console.log(req.query)  修改为post方式获取内容 {}
    console.log(req.body)
})

server.listen(8088,()=>console.log('Server runing at http://localahost:8088···'))