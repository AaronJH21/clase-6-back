const express = require('express')
const { Server } = require('http')
const Contenedor = require ('web/productos/stock')

const app = express ()

app.get('/', (req , res) => {
    return res.send({mensaje:'hola mundo'})
})
app.get('/productos',(req , res) =>{
    return res.send('Endpoint de productos')
})
app.get('/contacto',(req ,res) =>{
    return res.send('Endpoint de contacto')
})
const PORT =8080

const server = app.listen(PORT,()=>{
    console.log(`Servidor HTTP con Express corriendo en el puerto ${PORT} `)
})

server.on('error', error=> console.log(`error en el servidor: ${error}`))