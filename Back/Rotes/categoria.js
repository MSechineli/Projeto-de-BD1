const express = require('express');
const toConnectDB = require('./connect.js');
const router = express.Router();

//Buscar categorias
router.get('/',(req, res) =>{
    toConnectDB.query('SELECT * FROM CATEGORIA', (err, rows, fields) => {
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
})

router.get('/id',(req, res)=>{
    let strBusca = 'SELECT * FROM CATEGORIA WHERE id ="' + req.body.id+'"';
    con.query(strBusca, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

router.post('/',(req, res)=>{
    const strNovo ='INSERT INTO CATEGORIA(categoriaNome) VALUES ("' + req.body.categoriaNome + '")';

    toConnectDB.query(strNovo, (err, rows) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

router.delete('/', (req,res)=>{
    let idRemovido = req.body.id;
    console.log(idRemovido);
    toConnectDB.query('DELETE FROM CATEGORIA WHERE id =' + parseInt(idRemovido), (err, rows)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);    
    })
})

router.put('/',(req, res)=>{
    let categoriaAlterada = {};
    const { id, categoriaNome} = req.body;
    categoriaAlterada.id = id;
    categoriaAlterada.nome = categoriaNome;

    let filter = 'SELECT * FROM CATEGORIA WHERE id ="' + parseInt(categoriaAlterada.id)+'"';
    
    toConnectDB.query(filter, (err) => {
        if (!err){
        let altera = 'UPDATE CATEGORIA SET nome="'+ categoriaAlterada.nome +'"' + ' WHERE id = ' + parseInt(categoriaAlterada.id);
        toConnectDB.query(altera, (err, rows) =>{
            if (!err)
                res.send(rows);
            else
                console.log(err);
        });
        }
        else
            console.log(err);
    })

})

module.exports = router;