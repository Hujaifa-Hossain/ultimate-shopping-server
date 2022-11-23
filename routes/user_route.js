const router = require("express").Router();
const controller = require("../controller/user_controller");
const { verify_authorization, verify_admin } = require("../controller/verify_token");

router.get("/", controller.get_users);

router.get("/:id", verify_authorization, controller.get_user);

router.put("/:id", verify_authorization, controller.update_user);

module.exports = router;
