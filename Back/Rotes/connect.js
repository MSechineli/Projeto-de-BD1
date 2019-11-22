const sql = require('mysql');

var toConnectDB = sql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"projetobd1",
});

toConnectDB.connect(function(err){
    if(err) return console.log(err);
    console.log('conectou!');
})

module.exports = toConnectDB;