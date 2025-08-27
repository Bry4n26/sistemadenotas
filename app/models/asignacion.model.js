
module.exports = (sequelize, Sequelize) => {
  const Asignacion = sequelize.define("asignacion", {

    id_asignacion: {
      type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_curso: {
        type: Sequelize.INTEGER,
            allowNull: false,
            references: {       
                model: 'cursos', // nombre de la tabla referenciada
                key: 'id_curso'   // columna referenciada
            },
    },
    id_estudiante: {
      type: Sequelize.INTEGER,
        allowNull: false,
        references: {       
            model: 'estudiantes', // nombre de la tabla referenciada
            key: 'id_estudiante'   // columna referenciada
        },





    },

  });

  return Asignacion;
};
