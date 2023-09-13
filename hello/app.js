var http = require('http');
//create a server object:

http.createServer(function (req, res) {
    const url = req.url
    res.statusCode = 200
    if(url == '/home')
        res.end('welcome home')
    else if(url == '/about')
        res.end('welcome to about us')
    else if(url == '/node')
        res.end('welcome node')
    else 
        res.end('welcome here')
    
}).listen(4000); 

console.log('Server running at 4000');