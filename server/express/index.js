const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const { Sequelize, DataTypes } = require('sequelize');

// config
    //template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

// conexão com o banco de dados
const sequelize = new Sequelize('teste', 'root', '' , {
    host: 'localhost',
    dialect: 'mariadb'
});


app.listen(6069, function(){
    console.log('Rodando na http://localhost:6069');
});