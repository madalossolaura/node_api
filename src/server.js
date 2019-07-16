const express = require('express');
const app = express();

const servidor = require('http').Server(app);

const porta = 8000

app.use(require('./routes'))

servidor.listen(porta, console.log('API ouvindo a porta ' + porta));