var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controller/tickets');

router.get('/:id/tickets/new', ticketsCtrl.showCreateForm)
router.post('/:id/tickets/new', ticketsCtrl.create)
//router.post('/:id/tickets/delete', ticketsCtrl.create)
module.exports = router;
