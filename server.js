require('dotenv').config();
const http = require('http');
const port = process.env.PORT || '8080';
const host = process.env.HOST || 'localhost';
const test_variable = process.env.TEST_VARIABLE;
const resHTML = `<h1> Welcome to my page! </h1> <p> Here is the variable you were looking for: <strong>${test_variable}</strong> </p>
<p>Naviagte to /bonus if you need an inspirational quote!</p>
`;
const quotes = require('./quotes');



const returnRandomElementFromArray = (array) => {
    const fixed_array = array.map(el => {
        if (el.includes('’')) {
            return el.replace(/’/g, "'");
        }
        return el;
    });
    let random_index = Math.floor(Math.random() * fixed_array.length);
    return fixed_array[random_index];
};


const server = http.createServer((req, res) => {
    const quote = returnRandomElementFromArray(quotes);
    const res_html_whit_quote = `<h1> This is your motivational quote of the day! </h1> <h2> ${quote} </h2>`;
    let res_content = req.url.includes('bonus') ? res_html_whit_quote : resHTML;
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.end(res_content);
});

server.listen(port, host, () => {
    console.log('server running on port ' + port);
});