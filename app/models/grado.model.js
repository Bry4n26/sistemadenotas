
module.exports = (sequelize, Sequelize) => {
  const Grado = sequelize.define("grado", {

  id_grado: {
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
    nota: {
      type: Sequelize.FLOAT,
        allowNull: false,
    },
    tipo_evaluacion: {
        type: Sequelize.STRING,
            allowNull: true,
        },
        fecha: {
            type: Sequelize.DATE,
                allowNull: true,
            },

  });

  return Grado;
};
