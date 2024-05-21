require('dotenv').config();
const http = require('http');
const port = process.env.PORT || '8080';
const host = process.env.HOST || 'localhost';
const test_variable = process.env.TEST_VARIABLE;
const path = require('path');
const fs = require('fs');
const resHTML = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1> Welcome to my page! </h1> <p> Here is the variable you were looking for: <strong>${test_variable}</strong> </p>
        <p>Naviagte to /bonus if you need an inspirational quote!</p>
    </body>
</html>
`;
const quotes = require('./quotes');
const favicon = path.join(__dirname, 'favicon.ico');



const returnRandomElementFromArray = (array) => {
    let random_index = Math.floor(Math.random() * array.length);
    return array[random_index];
};


const server = http.createServer((req, res) => {
    console.log(req.url)
    const quote = returnRandomElementFromArray(quotes);
    if (req.url === `/favicon.ico`) {
        fs.readFile(favicon, (err, data) => {
            if (err) {
                res.writeHead(404, {
                    "Content-Type": "text/html"
                });
                res.end('');
                return;
            }

            res.writeHead(200, {
                "Content-Type": "image/x-icon"
            });

            res.end(data);
        })


        return
    }
    const res_html_whit_quote = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        
        </head>
        <body>
            <h1> This is your motivational quote of the day! </h1> 
            <h2> ${quote} </h2>
        </body>
    </html>`;
    let res_content = req.url.includes('bonus') ? res_html_whit_quote : resHTML;
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.end(res_content);
});

server.listen(port, host, () => {
    console.log('server running on port ' + port);
});