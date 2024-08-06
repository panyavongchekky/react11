const db = require('../config/db');

const Cart = {};

Cart.getAll = (callback) => {
  db.query('SELECT * FROM cart', callback);
};

Cart.add = (item, callback) => {
  db.query('INSERT INTO cart SET ?', item, callback);
};

Cart.update = (id, item, callback) => {
  db.query('UPDATE cart SET ? WHERE id = ?', [item, id], callback);
};

Cart.delete = (id, callback) => {
  db.query('DELETE FROM cart WHERE id = ?', [id], callback);
};

module.exports = Cart;
