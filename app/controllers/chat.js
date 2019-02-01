module.exports.iniciaChat = function(application, req, res){
    
    var dadosForm = req.body

    req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty()
    req.assert('apelido','nome ou apelido deve conter de 03 a 15 caracteres').len(3,15)

    var erros = req.validationErrors()

    if(erros){
        res.render("index", {validacao : erros})
        return
    }

    res.render("chat")
}