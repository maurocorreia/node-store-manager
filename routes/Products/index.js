const express = require('express');

const Products = require('../../controllers/Products');

const ProductRouter = express.Router();

ProductRouter.get('/', Products.getAll);
ProductRouter.get('/:id', Products.getById);

module.exports = ProductRouter;