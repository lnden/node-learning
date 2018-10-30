const crypto = require('crypto');

module.exports = {
	MD5_SUFFIX:'dasdfthbdtbdrf32423&a<sff%sdfa#sAS$sFSDG',
	md5:function(str){
		var obj = crypto.createHash('md5');
		obj.update(str);
		return obj.digest('hex')
	}
}