require('dotenv').config();
const port = process.env.PORT || '8080';
const host = process.env.HOST || 'localhost';

console.log(host, port)