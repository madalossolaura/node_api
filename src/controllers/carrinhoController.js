const Carrinho = require("../models/Carrinho");

module.exports = {
  async listar(req, res) {
    const produtos = await Carrinho.find().sort("-createdAt");

    return res.json(produtos);
  },

  async adicionar(req, res) {
    const produto = Carrinho.create(req.body);

    return res.json(produto);
  },

  async aumentarQuantidade(req, res) {
    const produto = Carrinho.findById(req.params.id);

    if (produto.quantidade == 10) {
      return res.json({ mensagem: "passou o limite" });
    }

    produto.quantidade++;
    produto.save();

    return res.json();
  },

  async diminuirQuantidade(req, res) {
    const produto = Carrinho.findById(req.params.id);

    if (produto.quantidade == 1) {
      return res.json({ mensagem: "passou o limite" });
    }

    produto.quantidade--;
    produto.save();

    return res.json();
  }
};
