// backend/routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/cart', cartController.getAllItems);
router.post('/cart', cartController.addItem);
router.put('/cart/:id', cartController.updateItem);
router.delete('/cart/:id', cartController.deleteItem);




module.exports = router;
