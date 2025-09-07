module.exports = (sequelize, Sequelize) => {
  const Grado = sequelize.define("grado", {
    id_grado: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    // 🔹 Campos nuevos
    id_curso: {
      type: Sequelize.INTEGER
    },
    zona: {
      type: Sequelize.INTEGER
    },
    parcial1: {
      type: Sequelize.INTEGER
    },
    parcial2: {
      type: Sequelize.INTEGER
    },
    examen: {
      type: Sequelize.INTEGER
    },
    fecha: {
      type: Sequelize.DATE
    }
  });

  return Grado;
};
