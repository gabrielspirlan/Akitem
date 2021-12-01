const models = require('../models/pedidosModels.js')

module.exports = {
    pedidosMenu,
    pedidosGetAll,
    pedidosGetByNome,
    pedidosGetByForn,
}/*    
    pedidosAtivoInativo
}*/

function pedidosMenu(req, res) {
    res.send('Rota Menu de Pedidos Encontrada!');
    console.log('Rota Menu de Pedidos Encontrada!')
}

function pedidosGetAll(req, res) {
    //res.send('Rota Menu de Autores Encontrada!');
    console.log('Acessando Lista de Pedidos {MODELS}!')
    models.getAllPedidos(function (err, resposta) {
        console.log('Retornando da {MODEL}', resposta)
        if (err) {
            throw err
        } else {
            res.json(resposta)
        }
    })
    return models.getAllPedidos
}
function pedidosGetByNome(req, res) {
    const id = req.params.nome
    console.log('Parametro Esperado: ' + id)
    models.getByNomePedidos(id, function (err, resposta) {
        console.log('Retornando Consulta de Pedidos por cliente {MODEL}', resposta)
        if (err) {
            throw err
        } else {
            res.json(resposta)
        }
    })
}
function pedidosGetByForn(req, res) {
    const id = req.params.nome
    console.log('Parametro Esperado: ' + id)
    models.getByFornPedidos(id, function (err, resposta) {
        console.log('Retornando Consulta de Pedidos por fornecedor {MODEL}', resposta)
        if (err) {
            throw err
        } else {
            res.json(resposta)
        }
    })
}

/*
function pedidosAtivoInativo(req, res) {
    const id = req.params.codigo
    res.json('Ativar/Inativar Pedidos {MODEL}')
    console.log('Ativar/Inativar Pedidos {MODEL')
    console.log('Parametro Esperado: ' + id)
    models.getByIdPedidos(id, function (err, resposta) {
        console.log('Retornando Consulta de Pedidos {MODEL}', resposta)
        if (err) {
            throw err
        } else {
            if (p_ativo == 'A') {
                p_ativo = 'I'
            } else {
                p_ativo = 'A'
            }
        }
        console.log('A/I: atualizado para ' + p_ativo)
        //Atualizar o coampo com o novo status
        models.ativarInativar(id, p_ativo, function (err, result) {
            if (err) {
                throw err
            }
            console.log('Registro Atualizado!!!')

        })
    })

}*/