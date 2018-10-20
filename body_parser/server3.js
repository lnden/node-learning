const express = require('express');
const queryString = require('querystring');
const server = express();

// 3.编写简单(body-parser)中间件，并且使用 next()

server.use((req,res,next)=>{
    let str = '';
    req.on('data',(data)=>{
        str+=data;
    })
    req.on('end',()=>{
        req.body = queryString.parse(str);
        next();
    })
})

server.use('/',(req,res)=>{
    console.log(req.body)
})

server.listen(8088,()=>console.log('Server runing at http://localhost:8088···'))