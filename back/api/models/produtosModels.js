var conexao = require('../../config/conexao')

module.exports = {
    getAllProdutos,
    getByIdProdutos,
}   

function getAllProdutos(callback) {
    conexao.query('select * from produto', callback)
}

function getByIdProdutos(id, callback) {
    conexao.query('select * from produto where codProduto = ' + id, callback)
}

/*function newProdutos(nomeProduto, descricao, preco, callback) {
    conexao.query('insert into produtos (nomeProduto, descricao, preco) = values (' + nomeProduto + ',' + descricao + ',' + preco + ',' , callback )
}
/*
function ativarInativar(id, ativo, callback) {
    console.log("Autores Ativando/Inativando Registro" + id + "Status" + ativo)
    const m_sql = "update autores set aut_ativoinativo = '" + ativo + "'where aut_codigo = '" + id + "'";
    conexao.query(m_sql, callback)

}*/
