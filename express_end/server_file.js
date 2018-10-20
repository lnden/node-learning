const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
let objMulter = multer({dest:'./www/upload'}); //使用multer对象
const fs = require('fs');
const pathLib = require('path');
const server = express();


// server.use(objMulter.single('lice')); //接受'f1'
server.use(objMulter.any()); //接受所有

server.use('/',(req,res)=>{
    // console.log(req.files)

    // 1.获取原始文件扩展名
    var file_name = req.files[0].originalname;
    console.log(file_name)
    //filename + ext
    var newPath = req.files[0].path+pathLib.parse(file_name).ext;
    // 2.重命名临时文件
    fs.rename(req.files[0].path,newPath,(err,data)=>{
        if(err){
            res.send('上传失败')
        }else{
            res.send('上传成功')
        }
    })

})

// enctype = "multipart/form-data"  //真正上传表单的数据
//         = "application/x-www-form-urlencoded"    //只能用来上传值 body-parser
//         = "text/plain"   //纯文本







server.listen(8088,()=>console.log('Server runing at http://localhost:8088···'))