let http = require('http');

let server = http.createServer((req, res)=>{
    // in node js
    res.end("Hello, I am from node server!"); 
    /**
     * in expressjs
     * res.send("Hello"); 
     */
});

server.listen(8080); // http://localhost:8080