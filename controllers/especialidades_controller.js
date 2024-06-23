const Especialidad = require('../models/Especialidad');


exports.listarEspecialidades = async (req, res) => {
    let especialidades = await Especialidad.findAll();
    res.json({data:especialidades});
};

exports.obtenerEspecialidad = async (req, res) => {
    let idEspecialidad = req.params.id;
    let especialidad = await Especialidad.findByPk(idEspecialidad);
    res.json({data:especialidad});
};

exports.crearEspecialidad = async (req, res) => {
    let nombre = req.body.nombre;
    const especialidad = await Especialidad.create({nombre});
    res.json({data:especialidad});
};

exports.actualizarEspecialidad = async (req, res) => {
    let idEspecialidad = req.params.id;
    let especialidad = await Especialidad.findByPk(idEspecialidad);
    let nombre = req.body.nombre;
    especialidad.nombre =nombre;
    especialidad = await especialidad.save();
    res.json({data:especialidad});
};

exports.deshabilitarEspecialidad = async (req, res) => {
    let idEspecialidad = req.params.id;
    let especialidad = await Especialidad.findByPk(idEspecialidad);
    especialidad.habilitado = false;
    especialidad = await especialidad.save();
    res.json({data:especialidad});
};

exports.habilitarEspecialidad = async (req, res) => {
    let idEspecialidad = req.params.id;
    let especialidad = await Especialidad.findByPk(idEspecialidad);
    especialidad.habilitado = true;
    especialidad = await especialidad.save();
    res.json({data:especialidad});
};