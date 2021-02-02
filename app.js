const app = require('./config/server')

const rotaNoticias = require('./app/routes/noticias')(app)

const rotaHome = require('./app/routes/home')(app)

const rotaForm_inc_noticia = require('./app/routes/formulario_inclusao_noticia')(app)


app.listen(3000, function(){
    console.log('Rodando na porta 3000')
})


