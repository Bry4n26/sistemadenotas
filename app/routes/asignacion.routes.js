module.exports = app => {
    const asignacion = require("../controllers/asignacion.controller.js");
    const router = require("express").Router();

    router.post("/create", asignacion.create);
    router.get("/", asignacion.findAll);
    router.get("/:id_curso", asignacion.findOne);
    router.put("/update/:id_curso", asignacion.update);
    router.delete("/delete/:id_curso", asignacion.delete);
    router.delete("/delete/", asignacion.deleteAll);
    app.use("/api/asignacion", router);
};
