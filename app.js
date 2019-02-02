/*Importar as configurações do servidor */
var app = require('./config/server')

/*Parametrizar porta de escuta do servidor */
var server = app.listen(80, function(){
    console.log('Servidor Online')
})

var io = require('socket.io').listen(server)

app.set('io', io)

/*Criar a conexao por webSocket */
io.on('connection', function(socket){
    console.log('O usuário conectou!')

    socket.on('disconnect', function(){
        console.log('O usuário desconectou!')
    })

    /*dialogos */

        socket.on('msgParaServidor', function(data){
            socket.emit(
                'msgParaCliente', 
                {apelido: data.apelido, mensagem: data.mensagem}
        )

        socket.broadcast.emit(
                'msgParaCliente', 
                {apelido: data.apelido, mensagem: data.mensagem}
        )

        /*participantes */
            if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
                socket.emit(
                    'participantesParaCliente', 
                    {apelido: data.apelido}
                )

                socket.broadcast.emit(
                    'participantesParaCliente', 
                    {apelido: data.apelido}
                )
            }
    })

    
})