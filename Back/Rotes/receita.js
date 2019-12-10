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

router.get('/id',(req, res)=>{
    const id = req.body.id;
    let filter = `
    SELECT * 
    FROM CATEGORIA 
    WHERE id ="${ parseInt(id) }"`;

    // let strBusca = 'SELECT * FROM RECEITA WHERE id ="' + id +'"';
    con.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

router.post('/',(req, res)=>{
    const {nome, preparo, idCategoria} = req.body;
    const novaReceita = {nome, preparo, idCategoria};

    let filter = `
    INSERT INTO 
    RECEITA(nome, preparo, idCategoria) 
    VALUES ("${(novaReceita.nome)}",
    "${(novaReceita.preparo)}",
    "${(novaReceita.idCategoria)}")`;

    toConnectDB.query(filter, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

router.delete('/', (req,res)=>{
    let idRemovido = req.body.id;
    let filter = `
    DELETE 
    FROM RECEITA 
    WHERE id ="${ parseInt(idRemovido) }"`;
    
    toConnectDB.query(filter, (err, rows, fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);    
    })
})

router.put('/',(req, res)=>{
    const { id, nome, preparo, idCategoria} = req.body;
    const receitaAlterada = {id, nome, preparo, idCategoria};
    
    let filter = `
    UPDATE RECEITA SET nome = "${receitaAlterada.nome}",
    preparo = "${receitaAlterada.preparo}",
    idCategoria = "${receitaAlterada.idCategoria}"
    WHERE id ="${ parseInt(receitaAlterada.id) }"`;

    toConnectDB.query(filter, (err, rows, fields) =>{
        if (!err)
            res.send(rows);
        else
            console.log(err);
    });
})

module.exports = router;