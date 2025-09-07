const db = require("../models");
const Cursos = db.cursos;
const Op = db.Sequelize.Op;

// Crear un nuevo curso
exports.create = (req, res) => {
    if (!req.body.nombre || !req.body.codigo) {
        return res.status(400).send({
            message: "Faltan datos obligatorios para crear un curso."
        });
    }

    const cursoData = {
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        semestre: req.body.semestre || null
    };

    Cursos.create(cursoData)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear el curso."
            });
        });
};

// Obtener todos los cursos o filtrar por id
exports.findAll = (req, res) => {
    const id_curso = req.query.id_curso;
    const condition = id_curso ? { id_curso: { [Op.eq]: id_curso } } : null;

    Cursos.findAll({ where: condition })
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al recuperar los cursos."
            });
        });
};

// Obtener un curso por ID
exports.findOne = (req, res) => {
    const id_curso = req.params.id_curso;

    Cursos.findByPk(id_curso)
        .then(data => {
            if (data) res.send(data);
            else res.status(404).send({ message: `No se encontró el curso con id=${id_curso}` });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al recuperar el curso con id=" + id_curso
            });
        });
};

// Actualizar un curso por ID
exports.update = (req, res) => {
    const id_curso = req.params.id_curso;

    Cursos.update(req.body, { where: { id_curso: id_curso } })
        .then(([num]) => {
            if (num === 1) {
                res.send({ message: "El curso se actualizó correctamente." });
            } else {
                res.send({ message: `No se pudo actualizar el curso con id=${id_curso}.` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar el curso con id=" + id_curso
            });
        });
};

// Eliminar un curso por ID
exports.delete = (req, res) => {
    const id_curso = req.params.id_curso;

    Cursos.destroy({ where: { id_curso: id_curso } })
        .then(num => {
            if (num === 1) {
                res.send({ message: "El curso fue eliminado correctamente!" });
            } else {
                res.send({ message: `No se pudo eliminar el curso con id=${id_curso}.` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar el curso con id=" + id_curso
            });
        });
};

// Eliminar todos los cursos
exports.deleteAll = (req, res) => {
    Cursos.destroy({ where: {}, truncate: false })
        .then(nums => {
            res.send({ message: `${nums} cursos fueron eliminados correctamente!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Se produjo un error al eliminar todos los cursos."
            });
        });
};