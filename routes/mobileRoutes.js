const express = require("express");
const ctrl = require("../controllers/mobileController");

const router = express.Router();

router.route("/").get(ctrl.getMobiles).post(ctrl.createMobile);
router.route("/:id").get(ctrl.getMobile).put(ctrl.updateMobile).delete(ctrl.deleteMobile);

module.exports = router;
