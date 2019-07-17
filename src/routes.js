const express = require("express");
const {
  listar,
  adicionar,
  aumentarQuantidade,
  diminuirQuantidade
} = require("./controllers/carrinhoController");

const routes = new express.Router();

routes.get("/", (req, res) => {
  res.json({ " API": "V1.0" });
});

routes.get("/api/listar-produtos", listar);
routes.post("/api/adicionar-produtos", adicionar);
routes.get("/api/aumentar-quantidade/:id", aumentarQuantidade);
routes.get("/api/diminuir-quantidade/:id", diminuirQuantidade);

module.exports = routes;
