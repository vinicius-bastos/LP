const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')


// Config   
    //Template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

//body-parser
    app.use(bodyParser.urlencoded({extend:false}))
    app.use(bodyParser.json())

//conexão com o db mysql
    const sequelize = new Sequelize('teste', 'root', 'bandtec', {
    host: 'localhost',
    dialect: 'mysql' 
})

//rotas
    app.get('/cad', function(req, res){
        res.render('formulario')
    })

    app.post('/add', function(req, res){
        res.send("Texto: "+ req.body.titulo+ " Conteudo: "+ req.body.conteudo)
    })

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
})