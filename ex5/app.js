const express = require("express");
const app = express();
const PORT = 8081;

app.get("/saudacao/:nome", (req, res) => {
    try {
        const { nome } = req.params;
        const { hora } = req.query;

        if (hora == undefined || hora == "" || isNaN(hora) || nome == undefined || nome == "") {

            return res.status(400).send(`Campos obrigatórios não preenchidos ou inválidos!`);
        } else if (hora >= 24 && hora <= 12){
            res.status(200).send(`<h1> bom dia,  ${nome} </h1>`); 
        } else if ((hora >= 13 && hora <= 17)){
            res.status(200).send(`<h1>boa tarde, ${nome} </h1>`);
        } else if ((hora >= 18 && hora <= 23)){
          res.status(200).send(`<h1>boa noite, ${nome} </h1>`);  
        }
    } catch (error) {
        console.error("Erro capturado:", error);
        res.status(500).send(`Erro interno no servidor`);
    }
});
app.listen(PORT, function mensagem() { // toda função tem um parêntese e chavinha
    console.log(`servidor rodando em https://localhost:${PORT}`)
});

