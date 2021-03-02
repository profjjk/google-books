const db = require("../models");

// Defining methods for the BooksController
module.exports = {
  findAll: function(req, res) {
    db.Book.find(req.query)
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book.create(req.body)
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(dbBooks => dbBooks.remove())
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(422).json(err));
  }
};