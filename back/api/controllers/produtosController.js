const models = require('../models/produtosModels.js')

module.exports = {
    produtosMenu,
    produtosGetAll,
    produtosGetById,
    produtosNew
}/*    
    pedidosAtivoInativo
}*/

function produtosMenu(req, res) {
    res.send('Rota Menu de Produtos Encontrada!');
    console.log('Rota Menu de Produtos Encontrada!')
}

function produtosGetAll(req, res) {
    //res.send('Rota Menu de Autores Encontrada!');
    console.log('Acessando Lista de Produtos {MODELS}!')
    models.getAllProdutos(function (err, resposta) {
        console.log('Retornando da {MODEL}', resposta)
        if (err) {
            throw err
        } else {
            res.json(resposta)
        }
    })
return models.getAllProdutos    
}
  function produtosGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado: ' + id)
    models.getByIdProdutos(id, function (err, resposta) {
        console.log('Retornando Consulta de Produtos {MODEL}', resposta)
        // p_ativo = resposta[0].aut_ativoinativo
        if (err) {
            throw err
        } else {
            res.json(resposta)
        }
    })
}

function produtosNew(req, res) {
    const nomeProduto = req.params.nomeProduto
    const descricao = req.params.descricao
    const preco = req.params.preco
    //console.log('Parametro Esperado: ' + id)
    models.newProdutos(nomeProduto, descricao, preco,  function (err, resposta) {
        console.log('Retornando Consulta de Produtos {MODEL}', resposta)
        // p_ativo = resposta[0].aut_ativoinativo
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