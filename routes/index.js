var express = require('express');
var router = express.Router();

router.use("/youtube", require("../apis/youtube/controller"))

module.exports = router;
