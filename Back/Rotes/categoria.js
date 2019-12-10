const express = require('express');
const toConnectDB = require('./connect.js');
const router = express.Router();

router.get('/',(req, res) =>{
    toConnectDB.query('SELECT * FROM CATEGORIA', (err, rows) => {
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
})

router.get('/id',(req, res)=>{
    const id = req.body.id;
    let filter = `
    SELECT * 
    FROM CATEGORIA 
    WHERE id ="${ parseInt(id) }"`;

    con.query(filter, (err, rows) => {
        if (!err)
            res.send(rows);
        else
            res.status(400).json({message: 'DEU ERRO NO DELETE'});
            console.log(err);
    })
})

router.post('/',(req, res)=>{
    const novoNomeCategoria = req.body.categoriaNome;
    let filter = `
    INSERT INTO 
    CATEGORIA(categoriaNome) 
    VALUES ("${ (novoNomeCategoria) }")`;

    toConnectDB.query(filter, (err, rows) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

router.delete('/', (req,res)=>{
    let idRemovido = req.body.id;
    console.log(idRemovido);

    let filter = `
    DELETE 
    FROM CATEGORIA 
    WHERE id ="${ parseInt(idRemovido) }"`;    

    toConnectDB.query(filter, (err, rows)=>{
        if(!err)
            res.send(rows);
        else
            res.status(400).json({message: 'DEU ERRO NO DELETE'});
            console.log(err);    
    })
})

router.put('/',(req, res)=>{
    const { id, categoriaNome } = req.body;
    const categoriaAlterada = {id, categoriaNome};

    let filter = `
    UPDATE CATEGORIA SET 
    categoriaNome = "${categoriaAlterada.categoriaNome}" 
    WHERE id ="${ parseInt(categoriaAlterada.id) }"`;
    
    toConnectDB.query(filter, (err, rows) =>{
        if (!err)
            res.send(rows);
        else
            console.log(err);
    });
})

module.exports = router;