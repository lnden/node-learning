const express = require('express');
const consolidate = require('consolidate');
const server = express();


server.set('view engine','html');
server.set('views','./views');
server.engine('html',consolidate.ejs);

server.use('/',(req,res)=>{
    res.render('index.ejs',{data:[
        {username:'lily',age:'26',address:'Beijing'},
        {username:'lucy',age:'18',address:'Shenzhen'},
        {username:'tom',age:'21',address:'Shanghai'},
        {username:'lnden',age:'19',address:'Heilongjiang'}
    ],name:'lnden'});
})


server.listen(8088,()=>console.log('Server runing at http://localhost:8088···'));