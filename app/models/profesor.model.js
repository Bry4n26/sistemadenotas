module.exports = (sequelize, Sequelize) => {
  const Profesor = sequelize.define("profesor", {
    id_profesor: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
   
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
    especialidad: {
      type: Sequelize.STRING
    }
  });

  return Profesor;
};
