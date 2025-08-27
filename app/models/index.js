const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.estudiante = require("./estudiante.model.js")(sequelize, Sequelize);
db.profesor = require("./profesor.model.js")(sequelize, Sequelize);
db.cursos = require("./cursos.model.js")(sequelize, Sequelize);
db.asignacion = require("./asignacion.model.js")(sequelize, Sequelize);
db.grado = require("./grado.model.js")(sequelize, Sequelize);




module.exports = db;
