const express = require('express');

const ProductRouter = require('./Products');
const SaleRouter = require('./Sales');

const Router = express.Router();

Router.use(express.json());
Router.use('/products', ProductRouter);
Router.use('/sales', SaleRouter);

module.exports = Router;