import http from "http";


//const http=require("http");
const server=http.createServer(function(req,res){
    if(req.url==='/getSecretData')
    {
        res.end('Secret Data');
    }
     res.end("Hello World");

});

server.listen(1235);