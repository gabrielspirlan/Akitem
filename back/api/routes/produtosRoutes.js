const controller = require('../controllers/produtosController.js')

server.get('/produtos', controller.produtosMenu)
server.get('/produtos/listar', controller.produtosGetAll)

server.get('/produtos/consultar/:codigo', controller.produtosGetById)



/*server.get('/pedidos/ativoInativo/:codigo', controller.pedidosAtivoInativo)*/