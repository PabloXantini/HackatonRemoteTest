const express = require('express');
const WebSocket = require('ws');
const app = express();
const http = require('http').createServer(app);
const wss = new WebSocket.Server({ server: http });

// Servir los archivos estáticos desde la carpeta public
app.use(express.static('public'));

// WebSocket: enviar ubicaciones simuladas cada 3 segundos
wss.on('connection', (ws) => {
  console.log("Cliente conectado por WebSocket");

  const interval = setInterval(() => {
    // Simulamos 2 vehículos moviéndose cerca de Mérida
    const ubicaciones = [
      {
        vehiculo_id: 1,
        lat: 20.967370 + Math.random() * 0.01,
        lng: -89.592586 + Math.random() * 0.01
      },
      {
        vehiculo_id: 2,
        lat: 20.965000 + Math.random() * 0.008,
        lng: -89.594000 + Math.random() * 0.008
      }
    ];

    // Enviamos las ubicaciones en formato JSON
    ws.send(JSON.stringify({ ubicaciones }));
  }, 3000);

  // Limpieza cuando el cliente se desconecta
  ws.on('close', () => clearInterval(interval));
});

http.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
