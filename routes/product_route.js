const router = require("express").Router();
const controller = require("../controller/product_controller");
const { verify_admin } = require("../controller/verify_token");

router.post("/post", controller.post_product);

router.get("/", controller.get_products);

router.get("/:id", controller.get_product);

router.delete("/:id", controller.delete_product);

module.exports = router;
