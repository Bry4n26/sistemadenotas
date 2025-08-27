
module.exports = (sequelize, Sequelize) => {
  const Cursos = sequelize.define("cursos", {
    id_curso: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_profesor: {
      type: Sequelize.INTEGER,
        allowNull: false,
        references: {       
            model: 'profesors', // nombre de la tabla referenciada
            key: 'id_profesor'   // columna referenciada
        },    
    },
    nombre: {
      type: Sequelize.STRING,   
        allowNull: false
    },
   codigo: {
      type: Sequelize.STRING,
        allowNull: false,
    },
    semestre: {
        type: Sequelize.STRING,
            allowNull: true,
        },
  });

  return Cursos;
};
