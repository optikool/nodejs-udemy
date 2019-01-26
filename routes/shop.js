const path = require('path');
const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop');

router.get('/products', shopController.getProducts);
router.get('/checkout', shopController.getCheckout);
router.get('/cart', shopController.getCart);
router.get('/orders', shopController.getOrders);
router.get('/', shopController.getIndex);

module.exports = router;