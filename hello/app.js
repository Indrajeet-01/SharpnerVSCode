var http = require('http');
//create a server object:

http.createServer(function (req, res) {
    res.write('Indrajeet'); 
    res.end(); 
}).listen(4000); 

console.log('Server running at 4000');