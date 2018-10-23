const express = require('express');
const server = express();
const login = require('./routes/login');
const user = require('./routes/user');

server.use('/user',user);
server.use('/login',login);

server.use(express.static('./www'));
server.listen(8088,()=>console.log('Server runing at http://localhost:8088···'));