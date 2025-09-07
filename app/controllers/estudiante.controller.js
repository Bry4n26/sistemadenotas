const db = require("../models");
const Estudiante = db.estudiante;
const Op = db.Sequelize.Op;

// Crear un nuevo estudiante
exports.create = (req, res) => {
    if (!req.body.nombre || !req.body.email) {
        return res.status(400).send({
            message: "Faltan datos obligatorios para crear un estudiante."
        });
    }

    const estudianteData = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        email: req.body.email,
        telefono: req.body.telefono,
        carnet: req.body.carnet || null
    };

    Estudiante.create(estudianteData)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear el estudiante."
            });
        });
};

// Obtener todos los estudiantes o filtrar por id
exports.findAll = (req, res) => {
    const id_estudiante = req.query.id_estudiante;
    const condition = id_estudiante ? { id_estudiante: { [Op.eq]: id_estudiante } } : null;

    Estudiante.findAll({ where: condition })
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al recuperar los estudiantes."
            });
        });
};

// Obtener un estudiante por ID
exports.findOne = (req, res) => {
    const id_estudiante = req.params.id_estudiante;

    Estudiante.findByPk(id_estudiante)
        .then(data => {
            if (data) res.send(data);
            else res.status(404).send({ message: `No se encontró el estudiante con id=${id_estudiante}` });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al recuperar el estudiante con id=" + id_estudiante
            });
        });
};

// Actualizar un estudiante por ID
exports.update = (req, res) => {
    const id_estudiante = req.params.id_estudiante;

    Estudiante.update(req.body, { where: { id_estudiante: id_estudiante } })
        .then(([num]) => {
            if (num === 1) {
                res.send({ message: "El estudiante se actualizó correctamente." });
            } else {
                res.send({ message: `No se pudo actualizar el estudiante con id=${id_estudiante}.` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar el estudiante con id=" + id_estudiante
            });
        });
};

// Eliminar un estudiante por ID
exports.delete = (req, res) => {
    const id_estudiante = req.params.id_estudiante;

    Estudiante.destroy({ where: { id_estudiante: id_estudiante } })
        .then(num => {
            if (num === 1) {
                res.send({ message: "El estudiante fue eliminado correctamente!" });
            } else {
                res.send({ message: `No se pudo eliminar el estudiante con id=${id_estudiante}.` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar el estudiante con id=" + id_estudiante
            });
        });
};

// Eliminar todos los estudiantes
exports.deleteAll = (req, res) => {
    Estudiante.destroy({ where: {}, truncate: false })
        .then(nums => {
            res.send({ message: `${nums} estudiantes fueron eliminados correctamente!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Se produjo un error al eliminar todos los estudiantes."
            });
        });
};