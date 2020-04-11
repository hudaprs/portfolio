const express = require("express");
const router = express.Router();

const loginController = require("../app/controllers/auth/loginController");

router.get("/login", loginController.index);

module.exports = router;
