var express = require('express');
var router = express.Router();
const { c, listarUsuarios } = require("../controllers/usuarios_controller")

/* GET users listing. */
router.get('/', listarUsuarios);

module.exports = router;
