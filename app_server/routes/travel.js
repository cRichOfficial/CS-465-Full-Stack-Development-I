var express = require('express');
var router = express.Router();
const controller = require('../controllers/travlr');

/* GET home page. */
router.get('/', controller.travel);
module.exports = router;
