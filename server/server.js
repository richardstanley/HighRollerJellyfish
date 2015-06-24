var express = require('./config/express');
var port = process.env.PORT || 3000;
console.log(process.env);
var app = express();
app.listen(port);
module.exports = app;

console.log('Server running at http://localhost:3000/');
