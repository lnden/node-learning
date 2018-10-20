const path = require('path');

let str = 'c:\\webapp\\www\\a.html';
let obj = path.parse(str)

console.log(obj)

// name  a
// ext   .html
// base  a.html
// dir   c:\\webapp\\www
// root  c:\\