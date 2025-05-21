const express = require('express')
const route = express.Router()
const controller = require('./controller')

route.get('/api/prueba', (req, res)=> {
    res.json({
        dato_salida: 25,
        directorio: '/',
        rutas: "../../"
    })
})

route.get('/api/productos', controller.obtenerTodos)
route.get('/api/productos/:idFiltro', controller.obtenerPorId)
route.post('/api/productos', controller.crearProducto)
route.post('/api/productos-verificados', controller.crearProductoVerificado)

module.exports = route