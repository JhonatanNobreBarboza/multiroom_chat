/*Importar as configurações do servidor */
var app = require('./config/server')

/*Parametrizar porta de escuta do servidor */
app.listen(80, function(){
    console.log('Servidor Online')
})