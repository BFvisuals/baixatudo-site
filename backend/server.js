// backend/server.js

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API do Baixa Tudo está online! 🚀");
});

app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});
