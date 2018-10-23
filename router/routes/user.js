const express = require('express');
const user = express.Router();

user.get('/list',(req,res)=>{
    res.send('/list');
    res.end();
})
user.get('/details',(req,res)=>{
    res.send('/details');
    res.end();
})

module.exports = user