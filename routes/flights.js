var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controller/flights');

router.get('/', flightsCtrl.index);

module.exports = router;
