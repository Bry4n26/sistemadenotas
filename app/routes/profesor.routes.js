module.exports = app => {
    const profesor = require("../controllers/profesor.controller.js");
    const router = require("express").Router();

    router.post("/create", profesor.create);
    router.get("/", profesor.findAll);
    router.get("/:id_profesor", profesor.findOne);
    router.put("/update/:id_profesor", profesor.update);
    router.delete("/delete/:id_profesor", profesor.delete);
    router.delete("/delete/", profesor.deleteAll);
    app.use("/api/profesor", router);
};
