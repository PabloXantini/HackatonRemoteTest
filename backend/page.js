//MANEJO DE LA PAGINA PRINCIPAL

const express = require('express');
const router = express.Router();
const { getConnection } = require('./database');
const path = require('path');

router.get('/', (req, res) => {
    /*
    const connection = getConnection();
    connection.connect((err)=>{
        if(err){
            console.error('Error de conexión a la base de datos', err);
        }else{
            console.error('Conexión exitosa');
        }
    });
    */
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
    //connection.end();
});

module.exports = router;
