const express = require('express');
const login = express.Router();

login.use('/',(req,res)=>{
    res.send('欢迎来到登录页面');
    res.end();
})

module.exports = login;