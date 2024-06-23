var express = require('express');
var router = express.Router();

const { 
    listarProfesionales,
    obtenerProfesional,
    crearProfesional,
    actualizarProfesional,
    deshabilitarProfesional,
    habilitarProfesional 
} = require('../controllers/profesionales_controller');

router.get('/', listarProfesionales);

router.get('/:id', obtenerProfesional);

router.post('/', crearProfesional);

router.post('/:id', actualizarProfesional);

router.post('/:id/deshabilitar', deshabilitarProfesional);

router.post('/:id/habilitar', habilitarProfesional);

module.exports = router;