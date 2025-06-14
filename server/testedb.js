const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('teste', 'root', '' , {
    host: 'localhost',
    dialect: 'mariadb'
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: DataTypes.STRING
    },
    conteudo: {
        type: DataTypes.TEXT
    }
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: DataTypes.STRING
    },
    sobrenome: {
        type: DataTypes.STRING
    },
    idade: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    }
})

/*Postagem.create({
    titulo: 'Primeira postagem',
    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
})*/
Usuario.create({
    nome: 'Joel',
    sobrenome: 'Farias',
    idade: 20,
    email: ''
})