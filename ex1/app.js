const express = require("express");
const app = express();
const PORT = 8081;

app.get("/soma/:primeiroNumero/:segundoNumero", (req, res) => {
  try {
    const { primeiroNumero } = req.params; 
    const { segundoNumero } =  req.params; 

    if (primeiroNumero == undefined || primeiroNumero == "" || isNaN(primeiroNumero) || segundoNumero == undefined || segundoNumero == "" || isNaN(segundoNumero)) {
      
        return res.status(400).send(`Campos obrigatórios não preenchidos ou inválidos!`);
    }

    const soma = parseFloat(primeiroNumero)+parseFloat(segundoNumero);

    res.status(200).send(`<h1>Olá, a soma dos números é ${soma} </h1>`);
  } catch (error) {
    console.error("Erro capturado:", error);
    res.status(500).send(`Erro interno no servidor`);
  }
});
app.listen(PORT, function mensagem() { // toda função tem um parêntese e chavinha
console.log(`servidor rodando em https://localhost:${PORT}`)
});


app.get("/subtracao/:primeiroNumero/:segundoNumero", (req, res) => {
  try {
    const { primeiroNumero } = req.params; 
    const { segundoNumero } =  req.params; 

    if (primeiroNumero == undefined || primeiroNumero == "" || isNaN(primeiroNumero) || segundoNumero == undefined || segundoNumero == "" || isNaN(segundoNumero)) {
      
        return res.status(400).send(`Campos obrigatórios não preenchidos ou inválidos!`);
    }

    const subtracao = parseFloat(primeiroNumero)-parseFloat(segundoNumero);

    res.status(200).send(`<h1>Olá, o resultado da subtração dos números é ${subtracao} </h1>`);
  } catch (error) {
    console.error("Erro capturado:", error);
    res.status(500).send(`Erro interno no servidor`);
  }
});
app.listen(PORT, function mensagem() { // toda função tem um parêntese e chavinha
console.log(`servidor rodando em https://localhost:${PORT}`)
});

app.get("/multiplicacao/:primeiroNumero/:segundoNumero", (req, res) => {
  try {
    const { primeiroNumero } = req.params; 
    const { segundoNumero } =  req.params; 

    if (primeiroNumero == undefined || primeiroNumero == "" || isNaN(primeiroNumero) || segundoNumero == undefined || segundoNumero == "" || isNaN(segundoNumero)) {
      
        return res.status(400).send(`Campos obrigatórios não preenchidos ou inválidos!`);
    }

    const multiplicacao = parseFloat(primeiroNumero) * parseFloat(segundoNumero);

    res.status(200).send(`<h1>Olá, o resultado da multiplicação dos números é ${multiplicacao} </h1>`);
  } catch (error) {
    console.error("Erro capturado:", error);
    res.status(500).send(`Erro interno no servidor`);
  }
});
app.listen(PORT, function mensagem() { // toda função tem um parêntese e chavinha
console.log(`servidor rodando em https://localhost:${PORT}`)
});

app.get("/divisao/:primeiroNumero/:segundoNumero", (req, res) => {
  try {
    const { primeiroNumero } = req.params; 
    const { segundoNumero } =  req.params; 

    if (primeiroNumero == undefined || primeiroNumero == "" || isNaN(primeiroNumero) || segundoNumero == undefined || segundoNumero == "" || isNaN(segundoNumero) || segundoNumero == 0 || primeiroNumero == 0) {
      
        return res.status(400).send(`Campos obrigatórios não preenchidos ou inválidos!`);
    }

    const divisao = parseFloat(primeiroNumero) / parseFloat(segundoNumero);

    res.status(200).send(`<h1>Olá, o resultado da divisao dos números é ${divisao} </h1>`);
  } catch (error) {
    console.error("Erro capturado:", error);
    res.status(500).send(`Erro interno no servidor`);
  }
});
app.listen(PORT, function mensagem() { // toda função tem um parêntese e chavinha
console.log(`servidor rodando em https://localhost:${PORT}`)
});
