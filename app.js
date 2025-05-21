const express = require('express')
const app = express()
const routes = require('./route')

// transformacion de respuestas a JSON
app.use(express.json())

// importar nuestras rutas
app.use('/', routes)
// manejo de errores

module.exports = app