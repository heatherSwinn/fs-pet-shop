const fs = require('fs')
const http = require('http');
const port = process.env.PORT || 8000;


const server = http.createServer(function(req, res) {
    logRequest(req);
    if (req.method === 'GET' && req.url === '/pets') {
        fs.readFile('./../pets.json', 'utf8', (error, data) =>{
            if(error){
                res.statusCode=500;
                res.end();
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(data);
            }
        })
    } else if (req.method === 'GET' &&req.url === '/pets/0') {
        fs.readFile('./../pets.json', 'utf8', (error, data) =>{
            if(error){
                res.statusCode=500;
                res.end();
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                let parse=JSON.parse(data);
                res.end(JSON.stringify(parse[0]));
            }
        })
    } else if (req.method === 'GET' &&req.url === '/pets/1') {
        fs.readFile('./../pets.json', 'utf8', (error, data) =>{
            if(error){
                res.statusCode=500;
                res.end();
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                let parse=JSON.parse(data);
                res.end(JSON.stringify(parse[1]));
            }
        })
    }else if (req.method === 'GET' &&req.url === '/pets/2') {
        fs.readFile('./../pets.json', 'utf8', (error, data) =>{
            if(error){
                res.statusCode=500;
                res.end();
            } else {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Not Found');
            }
        })
    }else if (req.method === 'GET' &&req.url === '/pets/-1') {
        fs.readFile('./../pets.json', 'utf8', (error, data) =>{
            if(error){
                res.statusCode=500;
                res.end();
            } else {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Not Found');
            }
        })
    }
})

server.listen(port, function (){
    console.log('Example server is listening on ', port);
});

function logRequest(req){
    console.log("Request Method: ", req.method);
    console.log("Request URL/Path: ", req.url);
}