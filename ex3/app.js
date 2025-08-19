const express = require("express");
const app = express();
const PORT = 8081;

app.get("/operacao/:tipo", (req, res) => {
    try {
        const {tipo} = req.params;
        const { primeiroNumero, segundoNumero } = req.query;

        if (primeiroNumero == undefined || primeiroNumero == "" || isNaN(primeiroNumero) || segundoNumero == undefined || segundoNumero == "" || isNaN(segundoNumero)) {

            return res.status(400).send(`Campos obrigatórios não preenchidos ou inválidos!`);
        }
        let resultado = 0;
        switch (tipo) {
            case "soma":
                resultado = parseFloat(primeiroNumero) + parseFloat(segundoNumero);
                break;
            case "subtracao":
                resultado = parseFloat(primeiroNumero) - parseFloat(segundoNumero);
                break;
            case "multiplicacao":
                resultado = parseFloat(primeiroNumero) * parseFloat(segundoNumero);
                break;
                
            case "divisao":
                if ((primeiroNumero != 0) && (segundoNumero != 0)) {
                    resultado = parseFloat(primeiroNumero) / parseFloat(segundoNumero);
                } else {
                    return res.status(400).send(`operação inválida!`);
                }
                break;

            default:
                return res.status(400).send(`nenhuma operação válida!`);
        }



        res.status(200).send(`<h1>Olá, o resultado da conta é ${resultado} </h1>`);
    } catch (error) {
        console.error("Erro capturado:", error);
        res.status(500).send(`Erro interno no servidor`);
    }
});
app.listen(PORT, function mensagem() { // toda função tem um parêntese e chavinha
    console.log(`servidor rodando em https://localhost:${PORT}`)
});
