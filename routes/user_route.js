const routes = require("express").Router();
const controller = require('../controller/user_controller')

routes.route("/").get(controller.get_users)
routes.route("/find/:id").get(controller.get_user)

module.exports = routes;