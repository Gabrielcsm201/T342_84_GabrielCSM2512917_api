const express = require("express");
const {
  getFornecedores,
  store,
  getById
} = require("../controllers/controllerFornecedores");

const router = express.Router();

router.get("/fornecedores", getFornecedores);
router.post("/fornecedores", store);
router.get("/fornecedores/:id", getById);

module.exports = router;
