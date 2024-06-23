const Especialidad = require('../models/Especialidad');
const Profesional = require('../models/Profesional');


exports.listarProfesionales = async (req, res) => {
    let profesionales = await Profesional.findAll({
        include: 'profesional_especialidad' // 'especialidad' debe coincidir con el alias utilizado en la relación
      });
    res.json({data:profesionales});
};

exports.obtenerProfesional = async (req, res) => {
    let idProfesional = req.params.id;
    let profesional = await Profesional.findByPk(idProfesional,{include: 'profesional_especialidad'});
    res.json({data:profesional});
};

exports.crearProfesional = async (req, res) => {
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let especialidad = await Especialidad.findByPk(req.body.id_especialidad);
    let profesional = new Profesional();
    profesional.nombre = nombre;
    profesional.apellido = apellido;
    profesional.id_especialidad = especialidad.id;
    profesional.profesional_especialidad = especialidad;
    profesional = await profesional.save();
    res.json({data:profesional});
};

exports.actualizarProfesional = async (req, res) => {
    let idProfesional = req.params.id;
    let profesional = await Profesional.findByPk(idProfesional);
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let especialidad = await Especialidad.findByPk(req.body.id_especialidad);

    profesional.nombre=nombre;
    profesional.apellido=apellido;
    profesional.id_especialidad=especialidad.id;
    profesional = await profesional.save();
    res.json({data:profesional});
};

exports.deshabilitarProfesional = async (req, res) => {
    let idProfesional = req.params.id;
    let profesional = await Profesional.findByPk(idProfesional);
    profesional.habilitado = false;
    profesional = await profesional.save();
    res.json({data:profesional});
};

exports.habilitarProfesional = async (req, res) => {
    let idProfesional = req.params.id;
    let profesional = await Profesional.findByPk(idProfesional);
    profesional.habilitado = true;
    profesional = await profesional.save();
    res.json({data:profesional});
};