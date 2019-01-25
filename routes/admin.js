const path = require('path');
const express = require('express');
const productsController = require('../controllers/admin');
const router = express.Router();

router.get('/add-product', productsController.getAddProduct);
router.get('/products-list', productsController.getProductsList);
router.post('/edit-product', productsController.postAddProduct);

module.exports = router;


