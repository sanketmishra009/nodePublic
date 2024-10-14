var url = require('url');
var parseurl = url.parse('http://www.google.com/search?name=sanketMishra');
console.log(parseurl.protocol);
console.log(parseurl.hostname);
console.log(parseurl.path);
console.log(parseurl.query);