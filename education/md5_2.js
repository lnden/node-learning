const common = require('./libs/common');

// var str = common.md5(common.md5(common.md5('123456')));
var password = '123456';
var str = common.md5(password+'dasdfthbdtbdrf32423&a<sff%sdfa#sAS$sFSDG');

console.log(str)
