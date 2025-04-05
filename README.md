🚗 Hackaton - Gestión y Rastreo de Vehículos

Aplicación web para la gestión de vehículos, rutas, mantenimientos y su rastreo en tiempo real. Desarrollada con Node.js, Express, WebSocket, MySQL y APIs externas como CarQuery y Google Maps.

---

📌 Descripción General

Este sistema permite a los usuarios:

- Registrar vehículos usando datos autocompletados por la API de CarQuery.
- Registrar rutas y mantenimientos asociados a vehículos.
- Validar correos electrónicos mediante un código de 6 dígitos.
- Visualizar la ubicación de vehículos en tiempo real en un mapa de Google.

---

🗂️ Estructura del Proyecto

Hackaton/
├── backend/
│   ├── Routes/
│   │   ├── Vehiculos.js
│   │   ├── Modelos.js
│   │   ├── Mantenimiento.js
│   │   └── Rutas.js
│   ├── database.js
│   ├── server.js
│   └── ws.js
├── pages/
│   ├── login.html
│   ├── verificacion.html
│   ├── dashboard.html
│   └── ...
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── tables.sql
└── README.md

---

⚙️ Tecnologías Utilizadas

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express, WebSocket
- Base de Datos: MySQL
- APIs externas: CarQuery API, Google Maps JavaScript API

---

🔐 Funcionalidades Principales

✅ Validación por correo electrónico
- Envío de código de 6 dígitos al email del usuario.
- Validación obligatoria antes de iniciar sesión.

🚘 Registro de vehículos
- Uso de CarQuery API para seleccionar marca, modelo y especificaciones.
- Almacenamiento en la base de datos.

🛣️ Rutas y mantenimientos
- Registro de rutas con fecha, origen, destino.
- Gestión de mantenimientos por tipo, fecha y descripción.

🗺️ Rastreo en tiempo real
- Visualización de ubicación en Google Maps.
- Actualización vía WebSocket.

---

🗄️ Estructura de Base de Datos

Archivo: tables.sql

Tablas incluidas:

- Vehiculo: id, marca, modelo, año, etc.
- Mantenimiento: id, tipo, fecha, descripción, vehiculo_id
- Ruta: id, origen, destino, fecha, vehiculo_id

---

🚀 Cómo Ejecutar el Proyecto

1. Clonar el repositorio

git clone https://github.com/usuario/hackaton.git
cd hackaton

2. Instalar dependencias

npm install

3. Configurar base de datos

- Crear base de datos en MySQL.
- Ejecutar el script tables.sql.
- Configurar credenciales en backend/database.js.

4. Iniciar el servidor

node backend/server.js

---

🧪 Pruebas

- Registro y validación de usuario vía correo electrónico.
- Inserción y visualización de vehículos.
- Asignación de rutas y mantenimientos.
- Visualización de ubicación en tiempo real en el mapa.

---

👥 Autores

- Jhonatan David Arcila Choc
- Jacob no se
- Abdiel Antonio Magaña Ayala
- Pablo Santili Buenfil
- Juan No se

---

📌 Notas adicionales

- Asegúrate de tener habilitada la Google Maps JavaScript API.
- Configura correctamente el servicio de correo para el envío de códigos.
- Usa HTTPS en producción para proteger WebSocket y datos personales.
