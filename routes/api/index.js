const router = require("express").Router();
const toqrRoutes = require("./ToqrDB");

router.use("/toqr", toqrRoutes);

module.exports = router;
