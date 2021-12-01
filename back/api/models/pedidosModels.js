var conexao = require('../../config/conexao')

module.exports = {
    getAllPedidos,
    getByNomePedidos,
    getByFornPedidos,

}

function getAllPedidos(callback) {
    conexao.query('select * from pedidos', callback)
}

function getByNomePedidos(id, callback) {
    conexao.query('select c.nome as cliente, pr.descricao as produto, pr.preco, f.nome_fornecedor as fornecedor  from pedido p'
        + '\ninner join cliente c on p.id_cliente = c.id_cliente'
        + '\ninner join item_pedido i on p.id_pedido = i.id_pedido'
        + '\ninner join produto pr on i.id_produto = pr.id_produto'
        + '\ninner join fornecedor f on pr.id_fornecedor = f.id_fornecedor'
        + '\nwhere c.nome like "%' + id + '%"', callback)
}

function getByFornPedidos(id, callback) {
    conexao.query('select f.nome_fornecedor as fornecedor, c.nome as comprador, p.data_pedido as pediu_em, p.data_entrega as devo_entregar_em, pr.descricao as produto, pr.preco, i.quantidade from pedido p'
        + '\ninner join cliente c on p.id_cliente = c.id_cliente'
        + '\ninner join item_pedido i on p.id_pedido = i.id_pedido'
        + '\ninner join produto pr on i.id_produto = pr.id_produto'
        + '\ninner join fornecedor f on pr.id_fornecedor = f.id_fornecedor'
        + '\nwhere f.nome_fornecedor like "%' + id + '%"', callback)
}

