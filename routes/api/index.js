const router = require("express").Router();
const toqrRoutes = require("./ToqrDB");

router.use("/ToqrDB", toqrRoutes);

module.exports = router;
