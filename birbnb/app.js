const express = require('express');
const healthCheck = require('./routers/healthCheck');

const app = express();
const PORT = 3000;

app.use(express.json());

// Rutas
app.use('/', healthCheck);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
