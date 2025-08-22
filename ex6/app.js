const express = require("express");
const app = express();
const PORT = 8081;

app.get("/imc", (req, res) => {
  const { peso, altura } = req.query;

  // validação dos parâmetros
  if (peso == undefined|| altura== undefined || isNaN(peso) || isNaN(altura)) {
    return res.status(400).send("Campos obrigatórios não preenchidos ou inválidos!");
  }

  const imc = (peso / (altura * altura)).toFixed(2);

  let classificacao = "";
  if (imc < 18.5) {
    classificacao = "Baixo peso";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else {
    classificacao = "Obesidade";
  }

  res.send(`IMC: ${imc} - ${classificacao}`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
