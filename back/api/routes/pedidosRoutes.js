const controller = require('../controllers/pedidosController.js')

server.get('/pedidos', controller.pedidosMenu)
server.get('/pedidos/listar', controller.pedidosGetAll)

server.get('/pedidos/consultarporcliente/:nome', controller.pedidosGetByNome)

server.get('/pedidos/consultarporfornecedor/:nome', controller.pedidosGetByForn)



/*server.get('/pedidos/ativoInativo/:codigo', controller.pedidosAtivoInativo)*/