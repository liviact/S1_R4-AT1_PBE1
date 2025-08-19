const express = require("express");
const app = express();
const PORT = 8081;

app.get("/ano/:ano", (req, res) => {
  try {
    const { ano } = req.params; 
   
    if (ano == undefined || ano == "" || isNaN(ano)) {
      
        return res.status(400).send(`Campos obrigatórios não preenchidos ou inválidos!`);
    } 
    if (ano%4===0) {
         res.status(200).send(`<h1>Olá, o ano ${ano} é bissexto! </h1>`);
    } else {
         res.status(200).send(`<h1>Olá, o ano ${ano} não é bissexto! </h1>`);
    }

   
  } catch (error) {
    console.error("Erro capturado:", error);
    res.status(500).send(`Erro interno no servidor`);
  }
});
app.listen(PORT, function mensagem() { // toda função tem um parêntese e chavinha
console.log(`servidor rodando em https://localhost:${PORT}`)
});

