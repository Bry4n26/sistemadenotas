module.exports = (sequelize, Sequelize) => {
  const Estudiante = sequelize.define("estudiante", {
    id_estudiante: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    // 🔹 Campos nuevos
    nombre: {
      type: Sequelize.STRING
    },
    apellido: {
      type: Sequelize.STRING
    },
    direccion: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    telefono: {
      type: Sequelize.STRING
    },
    carnet: {
      type: Sequelize.STRING
    }
  });

  return Estudiante;
};
