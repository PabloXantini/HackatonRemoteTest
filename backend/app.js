require('dotenv').config();
const express = require('express');
const session = require('express-session');

//const pageRoutes = require('./page');
//const userRoutes = require('./user');
//const queryRoutes = require('./query')
//const qrRoutes = require('./qr');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Importar rutas
app.use('/', pageRoutes);
//app.use('/', userRoutes);
//app.use('/', queryRoutes);
//app.use('/', qrRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});