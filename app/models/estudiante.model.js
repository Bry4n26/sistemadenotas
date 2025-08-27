
module.exports = (sequelize, Sequelize) => {
  const Estudiante = sequelize.define("estudiante", {
    id_estudiante: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: Sequelize.STRING,   
        allowNull: false
    },
    email: {
      type: Sequelize.STRING,
        allowNull: false,
    },
    carnet: {
        type: Sequelize.STRING,
            allowNull: true,
        },
  });

  return Estudiante;
};
