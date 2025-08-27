const db = require("../models");
const Asignacion = db.asignacion;
const Op = db.Sequelize.Op;

// Crear una nueva asignación
exports.create = (req, res) => {
    if (!req.body.id_asignacion) {
        return res.status(400).send({
            message: "Faltan datos obligatorios para crear la asignación."
        });
    }

    const asignacionData = {
        id_asignacion: req.body.id_asignacion,
        id_curso: req.body.id_curso || null
    };

    Asignacion.create(asignacionData)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear la asignación."
            });
        });
};

// Obtener todas las asignaciones o filtrar por id
exports.findAll = (req, res) => {
    const id_curso = req.query.id_curso;
    const condition = id_curso ? { id_curso: { [Op.eq]: id_curso } } : null;

    Asignacion.findAll({ where: condition })
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al recuperar las asignaciones."
            });
        });
};

// Obtener una asignación por ID
exports.findOne = (req, res) => {
    const id_curso = req.params.id_curso;

    Asignacion.findByPk(id_curso)
        .then(data => {
            if (data) res.send(data);
            else res.status(404).send({ message: `No se encontró la asignación con id=${id_curso}` });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al recuperar la asignación con id=" + id_curso
            });
        });
};

// Actualizar una asignación por ID
exports.update = (req, res) => {
    const id_curso = req.params.id_curso;

    Asignacion.update(req.body, { where: { id_curso: id_curso } })
        .then(([num]) => {
            if (num === 1) {
                res.send({ message: "La asignación se actualizó correctamente." });
            } else {
                res.send({ message: `No se pudo actualizar la asignación con id=${id_curso}.` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar la asignación con id=" + id_curso
            });
        });
};

// Eliminar una asignación por ID
exports.delete = (req, res) => {
    const id_curso = req.params.id_curso;

    Asignacion.destroy({ where: { id_curso: id_curso } })
        .then(num => {
            if (num === 1) {
                res.send({ message: "La asignación fue eliminada correctamente!" });
            } else {
                res.send({ message: `No se pudo eliminar la asignación con id=${id_curso}.` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar la asignación con id=" + id_curso
            });
        });
};

// Eliminar todas las asignaciones
exports.deleteAll = (req, res) => {
    Asignacion.destroy({ where: {}, truncate: false })
        .then(nums => {
            res.send({ message: `${nums} asignaciones fueron eliminadas correctamente!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Se produjo un error al eliminar todas las asignaciones."
            });
        });
};
