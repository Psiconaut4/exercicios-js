const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

// config
    //template engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// conexão com o banco de dados
const sequelize = new Sequelize('teste', 'root', '' , {
    host: 'localhost',
    dialect: 'mariadb'
});
//Rotas

app.get('/cad', function(req, res){
    res.render('formulario');
});

app.post('/add', function(req, res){
    req.body.titulo
    res.send('Texto: ' + req.body.titulo + ' Conteudo: ' + req.body.conteudo);
});

app.listen(6069, function(){
    console.log('Rodando na http://localhost:6069');
});
