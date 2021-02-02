    module.exports = function(app){

    app.get('/noticias', function(req, res){        

        let mysql = require('mysql')

        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'bandtec',
            database: 'portal_noticias'
        })

            connection.query('select * from noticias', function (err, result) {
                res.render('noticias/noticias.ejs', {noticias: result})
                })
     
        })
    }
