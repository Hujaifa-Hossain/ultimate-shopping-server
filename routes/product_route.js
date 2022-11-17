const routes = require("express").Router();
const controller = require("../controller/product_controller");

routes
  .route("/")
  .post(controller.post_products)
  .get(controller.get_products);

routes.route('/find/:id').get(controller.get_product)

module.exports = routes;
