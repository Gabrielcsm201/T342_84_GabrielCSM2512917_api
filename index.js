const express = require("express");
const rotaFornecedor = require("./routes/rotaFornecedor");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(rotaFornecedor);

app.use((error, req, res, next) => {
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    return res.status(400).json({ error: "JSON inválido no corpo da requisição." });
  }

  console.error(error);
  res.status(500).json({ error: "Erro interno ao processar a requisição." });
});

app.listen(port, () => {
  console.log(`API disponível na porta ${port}.`);
});
