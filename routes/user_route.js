const routes = require("express").Router();
const controller = require('../controller/auth_controller')

routes.route("/register").post(controller.register)
routes.route("/login").post(controller.login)

module.exports = routes;
