const express = require('express');
const toConnectDB = require('./connect.js');
const router = express.Router();

//Buscar categorias
router.get('/',(req, res) =>{
    toConnectDB.query('SELECT * FROM CATEGORIA', (err, rows) => {
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
})

router.get('/id',(req, res)=>{
    let strBusca = 'SELECT * FROM CATEGORIA WHERE id ="' + req.body.categoriaid+'"';
    con.query(strBusca, (err, rows) => {
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
    let idRemovido = req.body.categoriaid;
    console.log(idRemovido);
    toConnectDB.query('DELETE FROM CATEGORIA WHERE categoriaid =' + parseInt(idRemovido), (err, rows)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);    
    })
})

router.put('/',(req, res)=>{
    let categoriaAlterada = {};
    const { categoriaid, categoriaNome} = req.body;
    categoriaAlterada.id = categoriaid;
    categoriaAlterada.categoriaNome = categoriaNome;

    let filter = 'SELECT * FROM CATEGORIA WHERE categoriaid ="' + parseInt(categoriaAlterada.id)+'"';
    
    toConnectDB.query(filter, (err) => {
        if (!err){
        let altera = 'UPDATE CATEGORIA SET categoriaNome="'+ categoriaAlterada.categoriaNome +'"' + ' WHERE categoriaid = ' + parseInt(categoriaAlterada.id);
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