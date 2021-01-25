const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const path = require("path")
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('connect-flash')

//configurações
    //sessão
        app.use(session({
            secret: "cursodenode",
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash())
    // Middleware
        app.use((req, res, next) =>{
            res.locals.success_msg = req.flash('success_msg')
            res.locals.error_msg = req.flash('error_msg')
            next()
        })
    //body-parser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    //handlebars
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    //mongoose
    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://localhost/blogapp').then(() =>{
        console.log('Conectado ao mongo!')
    }).catch((err) =>{
        console.log('Erro ao se conectar: ' + err)
    })
//public
    app.use(express.static(path.join(__dirname, "public")))

    app.use((req, res, next) =>{
        console.log('Eu sou um middleware:)')
        next()
    })
    
//rotas
app.use('/admin', admin)
//outros
const PORT = 8081
app.listen(PORT, () =>{
    console.log('Servidor rodando! ')
})