const express = require('express');

const Sales = require('../../controllers/Sales');

const saleValidate = require('../../middlewares/saleValidate');

const SalesRouter = express.Router();

SalesRouter.get('/', Sales.getAll);
SalesRouter.get('/:id', Sales.getById);
SalesRouter.post('/', saleValidate, Sales.createNew);

module.exports = SalesRouter;