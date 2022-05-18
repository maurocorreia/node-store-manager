const express = require('express');

const Sales = require('../../controllers/Sales');

const SalesRouter = express.Router();

SalesRouter.get('/', Sales.getAll);
SalesRouter.get('/:id', Sales.getById);

module.exports = SalesRouter;