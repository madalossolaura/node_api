const mongoose = require("mongoose");

const CarrinhoSchema = new mongoose.Schema(
  {
    nome: String,
    valor: Number,
    quantidade: {
      type: Number,
      default: 1
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Carrinho", CarrinhoSchema);
