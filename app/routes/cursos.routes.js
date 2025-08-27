module.exports = app => {
    const cursos = require("../controllers/cursos.controller.js");
    const router = require("express").Router();
    router.post("/create", cursos.create);
    router.get("/", cursos.findAll);
    router.get("/:id_curso", cursos.findOne);
    router.put("/update/:id_curso", cursos.update);
    router.delete("/delete/:id_curso", cursos.delete);
    router.delete("/delete", cursos.deleteAll);
    app.use("/api/cursos", router);
};
