const db = require('./db');

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.DataTypes.TEXT
    },
    conteudo: {
        type: db.DataTypes.TEXT
    }
});

//Post.sync({force: true})

module.exports = Post;