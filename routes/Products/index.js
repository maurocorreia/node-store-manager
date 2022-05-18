const express = require('express');

const Products = require('../../controllers/Products');

const productValidate = require('../../middlewares/productValidate');

const ProductRouter = express.Router();

ProductRouter.get('/', Products.getAll);
ProductRouter.get('/:id', Products.getById);
ProductRouter.post('/', productValidate);

module.exports = ProductRouter;