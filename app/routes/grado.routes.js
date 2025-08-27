module.exports = app => {

const express = require("express");
const router = express.Router();
const gradoController = require("../controllers/grado.controller");

router.post("/", gradoController.create);
router.get("/", gradoController.findAll);
router.get("/:id", gradoController.findOne);
router.put("/:id", gradoController.update);
router.delete("/:id", gradoController.delete);
router.delete("/", gradoController.deleteAll);
app.use("/api/grado", router);
};