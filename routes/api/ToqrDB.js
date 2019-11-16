const router = require("express").Router();
const toqrController = require("../../controllers/toqrController");

router
	.route("/")
	.get(toqrController.findAll)
	.post(toqrController.create);

router
	.route("/:id")
	.get(toqrController.findById)
	.put(toqrController.update)
	.delete(toqrController.remove);

module.exports = router;
