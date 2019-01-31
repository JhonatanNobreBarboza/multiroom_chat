/*Importar o modulo do Framework Express */
var express = require('express')

/*Importar o modulo do Consign */
var consign = require('consign')

/*Importar o modulo do body-parser */
var bodyParser = require('body-parser')

/*importar o modulo do express-validator */
var expressValidator = require ('express-validator')

/*Iniciar o objeto do express */
var app = express()

/*setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs')
app.set('views', './app/views')

/*Configurar o middleware express.static */
app.use(express.static('./app/public'))

/*Configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended:true}))

/*Configurar o middleware express-validator */
app.use(expressValidator())

/*Configurando o consign para o auto load das routes, models e controllers para o objeto app*/
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)

/*Exportar o o objeto app */
module.exports = app