var http = require('http');

http.createServer(function(req, res){
    res.end("á A Á ã Ã à À World!");
}).listen(8080);

console.log("Servidor rodando!")