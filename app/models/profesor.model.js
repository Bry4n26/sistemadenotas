
module.exports = (sequelize, Sequelize) => {
  const Profesor = sequelize.define("profesor", {
    id_profesor: {
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
    especialidad: {
        type: Sequelize.STRING,
            allowNull: true,
        },
  });

  return Profesor;
};
