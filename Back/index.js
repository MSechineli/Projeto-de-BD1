const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(3000);
console.log("Funcionou");

app.use('/', router);
// app.use(app.router);
// routes.initialize(app);

const receita = require('./Rotes/receita');
app.use('/receita', receita);

const categoria = require('./Rotes/categoria');
app.use('/categoria', categoria);