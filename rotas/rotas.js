//npm install express --save  //instala o express
//npm install router --save  //instala o modulo router
const express = require('express')
const rotas = express.Router()

let filmesGenero = [
    {'filme':'encantado','genero':'desenho'},
    {'filme':'mugen-train','genero':'anime'},
    {'filme':'titanic','genero':'drama'},
    {'filme':'homem-aranha','genero':'heroi'}
]

rotas.get('/',(req,res)=>{
    res.json({ola:'bem-vindo'})
})

rotas.get('/:filmeid',(req,res)=>{
    const filme = req.params.filmeid
    const filmeI = filmesGenero.find(i=>i.filme == filme)
    if(!filmeI){
        res.status(404).json(
            {erro:'filme não encontrado',filmePesquisado:filme}
        )
    }else{
        res.status(200).json(filmeI)
    }
})

module.exports = rotas
