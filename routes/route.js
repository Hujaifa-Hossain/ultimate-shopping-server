const routes = require("express").Router();
const controller = require("../controller/controller");

routes.route("/api/product").get(controller.get_products);

module.exports = routes;
