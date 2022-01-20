const express = require('express')
const rotas = require('./rotas/rotas')
const porta = 8081

const app = express()

app.use('/',rotas)

app.get('*',(req,res)=>{
    res.send('FILMES ONLINE')
})

app.listen(porta,()=>{console.log('Rodando servidor...')})