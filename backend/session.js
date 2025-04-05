const express = require('express');
const router = express.Router();
const { getConnection } = require('./database');
const path = require('path');

router.post('/login', (req, res) => {
    const { email, pswd } = req.body;
    const connection = getConnection();
    //Depuración para conexión de base de datos
    
    connection.connect((err)=>{
        if(err){
            console.error('Error de conexión a la base de datos', err);
        }else{
            console.error('Conexión exitosa');
        }
    });
    connection.query(`
        SELECT ID_usuario, correo, contrasenia, Nombre 
        FROM Usuario
        WHERE correo = ?
    `, [email], (error, results) => {
        if (error) {
            connection.end();
            return res.status(500).json({ success: false, message: 'Error en el servidor' });
        }
        if (results.length === 0) {
            connection.end();
            return res.status(401).json({ success: false, message: 'Usuario no encontrado' });
        }

        const usuarioDB = results[0];
        const contraseñaValida = pswd === usuarioDB.contrasenia;

        console.log(pswd);
        console.log(usuarioDB.contrasenia);

        if (!contraseñaValida) {
            connection.end();
            return res.status(401).json({ success: false, message: 'Contraseña incorrecta' });
        }

        req.session.user = {
            id: usuarioDB.ID_usuario,
            email: usuarioDB.email,
            nombre: usuarioDB.Nombre
        };

        connection.end();
        res.json({ success: true });

        // Cerrar sesión automáticamente después de 10 minutos
        setTimeout(() => {
            req.session.destroy((err) => {
                if (err) {
                    console.error('Error al cerrar sesión automáticamente:', err);
                } else {
                    console.log('Sesión cerrada automáticamente por inactividad.');
                }
            });
        }, 600000); // 10 minutos
    });
});

module.exports = router;