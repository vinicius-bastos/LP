const Sequelize = require('sequelize')

//conexão com o db mysql
const sequelize = new Sequelize('postapp', 'root', 'bandtec', {
    host: 'localhost',
    dialect: 'mysql' 
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

