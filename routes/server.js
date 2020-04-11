const express = require("express");
const router = express.Router();

const controllerDir = "../app/controllers/server";
const masterControllerDir = controllerDir + "/master";

const dashboardController = require(`${controllerDir}/dashboardController`);
const userController = require(`${masterControllerDir}/userController`);

router.get("/", dashboardController.dashboard);

/**
 * Master
 */
router.get("/master/users", userController.index);

module.exports = router;
