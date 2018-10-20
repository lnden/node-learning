const fs = require('fs');

fs.rename('a.txt','b.txt',(err,data)=>{
    console.log(err)
})