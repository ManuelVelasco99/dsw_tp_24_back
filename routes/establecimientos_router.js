var express = require('express');
var router = express.Router();
const {listarEstablecimientos,
    obtenerEstablecimiento,
    crearEstablecimiento,
    actualizarEstablecimiento,
    deshabilitarEstablecimiento,
    habilitarEstablecimiento,
} = require("../controllers/establecimientos_controller")

/* GET users listing. */
router.get('/', listarEstablecimientos);

/* GET users listing. */
router.get('/:id', obtenerEstablecimiento);

/* GET users listing. */
router.post('/', crearEstablecimiento);

router.post('/:id', actualizarEstablecimiento);

router.post('/:id/deshabilitar', deshabilitarEstablecimiento);

router.post('/:id/habilitar', habilitarEstablecimiento);

module.exports = router;
