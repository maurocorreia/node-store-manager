const salesModel = require('../models/Sales');

const getAll = async () => {
    const sales = await salesModel.getAll();
    return sales;
};

const getById = async (id) => {
    const sale = await salesModel.getById(id);

    if (!sale.length) {
        const err = { status: 404, message: 'Sale not found' };
        throw err;
    }

    return sale;
};

module.exports = {
    getAll,
    getById,
};