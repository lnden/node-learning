const express = require('express');
const userRouter = require('./router/user');
const articleRouter = require('./router/article');
const server = express();

server.use('/user',userRouter)
server.use('/article',articleRouter)

server.listen(8088,()=>console.log('Server runing at http://localhost:8088···'));