/*Importar as configurações do servidor */
var app = require('./config/server')

/*Parametrizar porta de escuta do servidor */
var server = app.listen(80, function(){
    console.log('Servidor Online')
})

var io = require('socket.io').listen(server)

/*Criar a conexao por webSocket */
io.on('connection', function(socket){
    console.log('O usuário conectou!')

    socket.on('disconnect', function(){
        console.log('O usuário desconectou!')
    })
})