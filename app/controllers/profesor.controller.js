const db = require("../models");
const Profesor = db.profesor;
const Op = db.Sequelize.Op;

// Crear un nuevo profesor
exports.create = (req, res) => {
    if (!req.body.nombre || !req.body.email) {
        return res.status(400).send({
            message: "Faltan datos obligatorios para crear un profesor."
        });
    }

    const profesorData = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        email: req.body.email,
        telefono: req.body.telefono,
        especialidad: req.body.especialidad || null
    
    };

    Profesor.create(profesorData)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear el profesor."
            });
        });
};

// Obtener todos los profesores o filtrar por id
exports.findAll = (req, res) => {
    const id_profesor = req.query.id_profesor;
    const condition = id_profesor ? { id_profesor: { [Op.eq]: id_profesor } } : null;

    Profesor.findAll({ where: condition })
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al recuperar los profesores."
            });
        });
};

// Obtener un profesor por ID
exports.findOne = (req, res) => {
    const id_profesor = req.params.id_profesor;

    Profesor.findByPk(id_profesor)
        .then(data => {
            if (data) res.send(data);
            else res.status(404).send({ message: `No se encontró el profesor con id=${id_profesor}` });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al recuperar el profesor con id=" + id_profesor
            });
        });
};

// Actualizar un profesor por ID
exports.update = (req, res) => {
    const id_profesor = req.params.id_profesor;

    Profesor.update(req.body, { where: { id_profesor: id_profesor } })
        .then(([num]) => {
            if (num === 1) {
                res.send({ message: "El profesor se actualizó correctamente." });
            } else {
                res.send({ message: `No se pudo actualizar el profesor con id=${id_profesor}.` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar el profesor con id=" + id_profesor
            });
        });
};

// Eliminar un profesor por ID
exports.delete = (req, res) => {
    const id_profesor = req.params.id_profesor;

    Profesor.destroy({ where: { id_profesor: id_profesor } })
        .then(num => {
            if (num === 1) {
                res.send({ message: "El profesor fue eliminado correctamente!" });
            } else {
                res.send({ message: `No se pudo eliminar el profesor con id=${id_profesor}.` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar el profesor con id=" + id_profesor
            });
        });
};

// Eliminar todos los profesores
exports.deleteAll = (req, res) => {
    Profesor.destroy({ where: {}, truncate: false })
        .then(nums => {
            res.send({ message: `${nums} profesores fueron eliminados correctamente!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Se produjo un error al eliminar todos los profesores."
            });
        });
};
