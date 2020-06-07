var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controller/flights');

router.get('/', flightsCtrl.index);
router.get('/new',flightsCtrl.new);

module.exports = router;
