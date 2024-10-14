var http = require('http');

var handler = (req, res)=>{
    console.log('Request to ',req.url);
    res.end('Hello World!');
};

var server = http.createServer(handler);

var port = 3001;
server.listen(port, ()=>{
    console.log('listening on port: ',port);
});