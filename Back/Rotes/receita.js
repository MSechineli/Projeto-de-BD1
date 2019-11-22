const express = require('express');
const toConnectDB = require('./connect.js');
const router = express.Router();

//Buscar receitas
router.get('/',(req, res) =>{
    toConnectDB.query('SELECT * FROM RECEITA', (err, rows, fields) => {
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
    console.log("passei por aqui");
})

router.post('/',(req, res)=>{
    let novaReceita = {};
    const {id, nome, preparo} = req.body;
    
    novaReceita.nome = nome;    
    novaReceita.preparo = preparo;

    const streceita ='INSERT INTO RECEITA(nome, preparo) VALUES ("' + novaReceita.nome + '","'+ novaReceita.preparo +'")';

    toConnectDB.query(streceita, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

router.delete('/', (req,res)=>{
    let idRemovido = req.body.id;
    console.log(idRemovido);
    toConnectDB.query('DELETE FROM RECEITA WHERE id =' + parseInt(idRemovido), (err, rows, fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);    
    })
})

router.put('/',(req, res)=>{
    let receitaAlterada = {};
    const { id, nome, preparo} = req.body;
    receitaAlterada.id = id;
    receitaAlterada.nroCliente = nome;
    receitaAlterada.nomeCliente = preparo;

    let filter = '';
    console.log(req.body);
    if (req.body) filter = 'UPDATE CLIENTE SET nroCliente=' + parseInt(cliente.nroCliente) + ' , nomeCliente="'+ cliente.nomeCliente + '"' + ' WHERE id = ' + parseInt(cliente.id);
    console.log(filter);
    con.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

module.exports = router;