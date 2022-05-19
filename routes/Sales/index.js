const express = require('express');

const Sales = require('../../controllers/Sales');

const saleValidate = require('../../middlewares/saleValidate');

const SalesRouter = express.Router();

SalesRouter.get('/', Sales.getAll);
SalesRouter.post('/', saleValidate, Sales.createNew);

SalesRouter.get('/:id', Sales.getById);
SalesRouter.put('/:id', Sales.updateExistent);

module.exports = SalesRouter;