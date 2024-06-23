var express = require('express');
var router = express.Router();

const {listarEspecialidades,
    obtenerEspecialidad,
    crearEspecialidad,
    actualizarEspecialidad,
    deshabilitarEspecialidad,
    habilitarEspecialidad
} = require("../controllers/especialidades_controller")

router.get('/', listarEspecialidades);

router.get('/:id', obtenerEspecialidad);

router.post('/', crearEspecialidad);

router.post('/:id', actualizarEspecialidad);

router.post('/:id/deshabilitar', deshabilitarEspecialidad);

router.post('/:id/habilitar', habilitarEspecialidad);

module.exports = router;
