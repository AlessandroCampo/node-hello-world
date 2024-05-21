require('dotenv').config();
const http = require('http');
const port = process.env.PORT || '8080';
const host = process.env.HOST || 'localhost';


console.log(host, port)

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.end('Hello World')
})

server.listen(port, host, () => {
    console.log('server running on port ' + port)
})