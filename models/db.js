const Sequelize = require('sequelize')

//conexão com o db mysql
const sequelize = new Sequelize('postapp', 'root', '@Vini23763492', {
    host: 'localhost',
    dialect: 'mysql' 
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}