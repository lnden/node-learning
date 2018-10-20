const queryString = require('querystring');

// module.exports = function(req,res,next){
//     let str = '';
//     req.on('data',(data)=>{
//         str+=data;
//     })
//     req.on('end',()=>{
//         req.body = queryString.parse(str);
//         next();
//     })
// }

// 优化使用 server.use(myBodyParser)
// module.exports = function(){
//     return function(req,res,next){
//         let str = '';
//         req.on('data',(data)=>{
//             str+=data;
//         })
//         req.on('end',()=>{
//             req.body = queryString.parse(str);
//             next();
//         })
//     }  
// }


// 优化使用 server.use(myBodyParser.urlencoded())
module.exports.urlencoded = function(){
    return function(req,res,next){
        let str = '';
        req.on('data',(data)=>{
            str+=data;
        })
        req.on('end',()=>{
            req.body = queryString.parse(str);
            next();
        })
    }  
}