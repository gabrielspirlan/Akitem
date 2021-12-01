//const models = require('../models/indexModels')

module.exports = {
    index,
}

function index(req, res) {
    res.send('Rota Raiz Encontrada!');
    console.log('Rota Raiz Encontrada!')
}