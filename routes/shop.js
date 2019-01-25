const path = require('path');
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get('/cart', productsController.getCart);
router.get('/product-list', productsController.getProductsList);
router.get('/', productsController.getProducts);

module.exports = router;