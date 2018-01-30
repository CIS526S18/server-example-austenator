"use strict"

// PORT definition.
const port = 3045;

// Import the HTTP library.
const http = require('http');

// Import the file system library.
const fs = require('fs');

function handleRequest(req, res){
    console.log('./public'+req.url);

    switch(req.url) {
        case '/':
        case '/openhouse.html':
            res.end(fs.readFileSync('public/openhouse.html'));
            break;
        case '/openhouse.css':
            res.end(fs.readFileSync('public/openhouse.css'));
            break;
        case '/openhouse.js':
            res.end(fs.readFileSync('public/openhouse.js'));
            break;
        default:
            res.statusCode = 404;
            res.end('File not found!');
    }   
    
}

// Create the web server.
var server = http.createServer(handleRequest);

// Start listening.
server.listen(port, function (){
    console.log('Listening on port ' + port+ '!\n\n');
});

