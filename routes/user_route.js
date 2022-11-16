const routes = require("express").Router();
const controller = require('../controller/user_controller')

routes.route("/api/users").post(controller.create_user)

module.exports = routes;
