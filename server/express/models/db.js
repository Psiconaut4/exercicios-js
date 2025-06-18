const { Sequelize, DataTypes } = require('sequelize');

// conexão com o banco de dados
const sequelize = new Sequelize('postapp', 'root', '' , {
    host: 'localhost',
    dialect: 'mariadb'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    DataTypes: DataTypes
}