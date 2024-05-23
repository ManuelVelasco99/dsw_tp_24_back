const Establecimiento = require('../models/Establecimiento');


exports.listarEstablecimientos = async (req, res) => {
    let establecimientos = await Establecimiento.findAll();
    res.json({data:establecimientos});
};

exports.obtenerEstablecimiento = async (req, res) => {
    let idEstablecimiento = req.params.id;
    let establecimiento = await Establecimiento.findByPk(idEstablecimiento);
    res.json({data:establecimiento});
};

exports.crearEstablecimiento = async (req, res) => {
    let nombre = req.body.nombre;
    let direccion = req.body.direccion;
    let telefono = req.body.telefono;
    const establecimiento = await Establecimiento.create({nombre,direccion,telefono});
    res.json({data:establecimiento});
};

exports.actualizarEstablecimiento = async (req, res) => {
    let idEstablecimiento = req.params.id;
    let establecimiento = await Establecimiento.findByPk(idEstablecimiento);
    let nombre = req.body.nombre;
    let direccion = req.body.direccion;
    let telefono = req.body.telefono;
    establecimiento.nombre=nombre;
    establecimiento.direccion=direccion;
    establecimiento.telefono=telefono;
    establecimiento = await establecimiento.save();
    res.json({data:establecimiento});
};

exports.deshabilitarEstablecimiento = async (req, res) => {
    let idEstablecimiento = req.params.id;
    let establecimiento = await Establecimiento.findByPk(idEstablecimiento);
    establecimiento.habilitado = false;
    establecimiento = await establecimiento.save();
    res.json({data:establecimiento});
};

exports.habilitarEstablecimiento = async (req, res) => {
    let idEstablecimiento = req.params.id;
    let establecimiento = await Establecimiento.findByPk(idEstablecimiento);
    establecimiento.habilitado = true;
    establecimiento = await establecimiento.save();
    res.json({data:establecimiento});
};