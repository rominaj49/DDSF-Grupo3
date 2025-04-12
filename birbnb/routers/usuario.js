
const express = require('express');
const router = express.Router();
const {
    obtenerNotificaciones
} = require('../controllers/usuarioController.js');

router.get('/mostrarNotificaciones/:userId', obtenerNotificaciones);


module.exports = router;
