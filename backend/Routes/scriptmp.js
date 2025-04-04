let map;
let marcadores = {}; // Almacena marcadores por ID

document.addEventListener("DOMContentLoaded", () => {
  // Inicializa el mapa centrado en Mérida
  map = L.map('map').setView([20.967370, -89.592586], 13);

  // Capa de mapa de OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Conexión con servidor WebSocket
  const socket = new WebSocket("ws://localhost:3000");

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    data.ubicaciones.forEach((ubi) => {
      const pos = [ubi.lat, ubi.lng];

      // Si el vehículo no tiene marcador, crearlo
      if (!marcadores[ubi.vehiculo_id]) {
        marcadores[ubi.vehiculo_id] = L.marker(pos)
          .addTo(map)
          .bindPopup(`Vehículo ${ubi.vehiculo_id}`);
      } else {
        // Si ya existe, actualizar su posición
        marcadores[ubi.vehiculo_id].setLatLng(pos);
      }
    });
  };
});
