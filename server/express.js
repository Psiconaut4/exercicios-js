const express = require('express');
const app = express();

app.get("/", function(req,res){
    res.sendFile(__dirname+"/home.html");
})

app.get("/aipapai", function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.get("/ola/:nome/:cargo/:tamanho", function(req,res){
    res.send("ola "+req.params.nome+"<h1>"+req.params.tamanho+"</h1>"+"<h2> seu cargo é "+req.params.cargo+"</h2>");
})

app.listen(8081, function(){
    console.log('Ta rodando na url http://localhost:8081 carai');
});
