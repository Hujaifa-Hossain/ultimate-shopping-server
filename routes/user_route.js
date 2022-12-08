const router = require("express").Router();
const controller = require("../controller/user_controller");
const { verify_authorization, verify_admin } = require("../controller/verify_token");

router.get("/", controller.get_users);

router.get("/:id", controller.get_user);

router.put("/:id", controller.update_user);

module.exports = router;
