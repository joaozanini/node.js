const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Olá, mundo!")
})

app.get("/sobre", function(req, res){
    res.send("pag sobre")
})

app.listen(8081, function(){
    console.log('Servidor Rodando...')
})