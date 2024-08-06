const Cart = require('../models/cartModel');

exports.getAllItems = (req, res) => {
  Cart.getAll((err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
};

exports.addItem = (req, res) => {
  const newItem = req.body;
  Cart.add(newItem, (err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
};

exports.updateItem = (req, res) => {
  const { id } = req.params;
  const updatedItem = req.body;
  Cart.update(id, updatedItem, (err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
};

exports.deleteItem = (req, res) => {
  const { id } = req.params;
  Cart.delete(id, (err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
};
