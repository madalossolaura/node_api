const express = require("express");
const app = express();

const servidor = require("http").Server(app);

const porta = 8000;

const cors = require("cors");

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://db_laura:silva@cluster0-sqflo.mongodb.net/Carrinho?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.use(express.urlencoded({ extend: false }));
app.use(express.json());
app.use(cors());
app.use(require("./routes"));

servidor.listen(porta, console.log("API ouvindo a porta " + porta));
