require('dotenv').config();
const http = require('http');
const port = process.env.PORT || '8080';
const host = process.env.HOST || 'localhost';
const res = process.env.RES
const resHTML = `<h1> Welcome to my page! </h1> <p> Here is the variable you were looking for: <strong>${res}</strong> </p>`


const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.end(resHTML)
})

server.listen(port, host, () => {
    console.log('server running on port ' + port)
})