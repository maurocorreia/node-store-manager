const express = require('express');

const Products = require('../../controllers/Products');

const productValidate = require('../../middlewares/productValidate');

const ProductRouter = express.Router();

ProductRouter.get('/', Products.getAll);
ProductRouter.post('/', productValidate, Products.createNew);

ProductRouter.get('/:id', Products.getById);
ProductRouter.put('/:id', Products.updateExistent);
ProductRouter.delete('/:id', Products.deleteExistent);

module.exports = ProductRouter;