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
router.get("/master/users/create", userController.create);
router.post("/master/users/store", userController.store);
router.get("/master/users/:_id", userController.show);
router.get("/master/users/edit/:_id", userController.edit);
router.post("/master/users/update/:_id", userController.update);
router.post("/master/users/delete/:_id", userController.destroy);

module.exports = router;
