module.exports = app => {
    const estudiante = require("../controllers/estudiante.controller.js");
    const router = require("express").Router();

    router.post("/create", estudiante.create);
    router.get("/", estudiante.findAll);
    router.get("/:id_estudiante", estudiante.findOne);
    router.put("/update/:id_estudiante", estudiante.update);
    router.delete("/delete/:id_estudiante", estudiante.delete);
    router.delete("/delete/", estudiante.deleteAll);
    app.use("/api/estudiante", router);
};
