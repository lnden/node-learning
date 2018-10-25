var str = '\
aaa\n\
\n\
asasasa\n\
sasa\n\
asasasas\n\
';
console.log(str)

var str2 = str.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
console.log(str2)