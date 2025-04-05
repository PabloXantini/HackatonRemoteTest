//require('dotenv').config();
const express = require('express');
const session = require('express-session');

const pageRoutes = require('./page');
const sessionRoute = require('./session');
//const Map = require('./scriptmp');
//const userRoutes = require('./user');
//const queryRoutes = require('./query')
//const qrRoutes = require('./qr');

const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('frontend'));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));


// Importar rutas
app.use('/', pageRoutes);
app.use('/', sessionRoute);
//app.use('/', Map);
//app.use('/', queryRoutes);
//app.use('/', qrRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});