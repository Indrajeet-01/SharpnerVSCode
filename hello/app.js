var http = require('http');
var fs = require('fs')
//create a server object:

http.createServer(function (req, res) {
    const url = req.url
    const method = req.method
    res.statusCode = 200
    if(url == '/'){
        res.write('<html>')
        res.write('<head><title> Enter message </title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input></form></body>')
        res.write('</html>')
        return res.end()
    }
    if(url == '/message' && method == 'POST'){
        fs.writeFileSync('message.txt', 'DUMMY')
        res.statusCode = 302
        res.setHeader('Location' , '/')
        res.end()
    }
    
    
    
}).listen(4000); 

console.log('Server running at 4000');