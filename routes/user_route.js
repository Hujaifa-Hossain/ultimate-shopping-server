const routes = require("express").Router();
const controller = require("../controller/user_controller");
const { verify_authorization } = require("../controller/verify_token");

routes.route("/").get(controller.get_users);
routes.route("/find/:id").get(controller.get_user);

routes.put('/:id', verify_authorization, controller.update_user)

module.exports = routes;
