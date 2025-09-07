const db = require("../models");
const Grado = db.grado;
const Op = db.Sequelize.Op;

// Crear un nuevo registro de Grado
exports.create = async (req, res) => {
    if (!req.body.id_curso || !req.body.nota) {
        res.status(400).send({ message: "id_curso y nota son obligatorios!" });
        return;
    }

    const grado = {
        id_curso: req.body.id_curso,
        nota: req.body.nota,
        tipo_evaluacion: req.body.tipo_evaluacion,
        parcial1: req.body.parcial1,
        parcial2: req.body.parcial2,
        examen: req.body.examen,
        fecha: req.body.fecha,
    };

    try {
        const data = await Grado.create(grado);
        res.send(data);
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al crear el Grado." });
    }
};

// Obtener todos los registros de Grado
exports.findAll = async (req, res) => {
    try {
        const data = await Grado.findAll();
        res.send(data);
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar los Grados." });
    }
};

// Obtener un Grado por su id
exports.findOne = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await Grado.findByPk(id);
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({ message: `No se encontró el Grado con id=${id}.` });
        }
    } catch (err) {
        res.status(500).send({ message: "Error al recuperar el Grado con id=" + id });
    }
};

// Actualizar un Grado por su id
exports.update = async (req, res) => {
    const id = req.params.id;

    try {
        const num = await Grado.update(req.body, { where: { id_grado: id } });
        if (num == 1) {
            res.send({ message: "Grado actualizado correctamente." });
        } else {
            res.send({ message: `No se pudo actualizar el Grado con id=${id}. Quizá no se encontró o el body está vacío.` });
        }
    } catch (err) {
        res.status(500).send({ message: "Error al actualizar el Grado con id=" + id });
    }
};

// Eliminar un Grado por su id
exports.delete = async (req, res) => {
    const id = req.params.id;

    try {
        const num = await Grado.destroy({ where: { id_grado: id } });
        if (num == 1) {
            res.send({ message: "Grado eliminado correctamente." });
        } else {
            res.send({ message: `No se pudo eliminar el Grado con id=${id}. Quizá no se encontró.` });
        }
    } catch (err) {
        res.status(500).send({ message: "No se pudo eliminar el Grado con id=" + id });
    }
};

// Eliminar todos los Grados
exports.deleteAll = async (req, res) => {
    try {
        const nums = await Grado.destroy({ where: {}, truncate: false });
        res.send({ message: `${nums} Grados fueron eliminados correctamente.` });
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al eliminar todos los Grados." });
    }
};
