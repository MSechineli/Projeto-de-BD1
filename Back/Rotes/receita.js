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
    let strBusca = 'SELECT * FROM RECEITA WHERE id ="' + req.body.id+'"';
    con.query(strBusca, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
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
    receitaAlterada.nome = nome;
    receitaAlterada.preparo = preparo;

    let filter = 'SELECT * FROM Receita WHERE id ="' + parseInt(req.body.id)+'"';
    
    toConnectDB.query(filter, (err, rows, fields) => {
        if (!err){
        let altera = 'UPDATE RECEITA SET nome="'+ receitaAlterada.nome +'" , preparo="'+ receitaAlterada.preparo + '"' + ' WHERE id = ' + parseInt(receitaAlterada.id);
        toConnectDB.query(altera, (err, rows, fields) =>{
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