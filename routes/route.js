const routes = require("express").Router();
const controller = require("../controller/controller");

routes
  .route("/api/product")
  .post(controller.post_products)
  .get(controller.get_products);

routes.route('/api/product/:id').get(controller.get_product)

module.exports = routes;
