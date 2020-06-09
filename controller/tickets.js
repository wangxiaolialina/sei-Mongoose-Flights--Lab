const Ticket = require('../models/ticket');

module.exports = {
    showCreateForm,
    create,
}

function showCreateForm(req, res) {
    res.render("flights/tickets/new", {
        title: "New Ticket",
        flight_id: req.params.id
    });
}

function create(req, res) {
    req.body.flight = req.params.id;
    const ticket = new Ticket(req.body);
    ticket.save(function (err) {
        if (err) return res.redirect(`/flights/${req.params.id}/tickets/new`);

        res.redirect(`/flights/${req.params.id}`);
    });
}