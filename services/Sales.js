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

const createNew = async (sales) => {
    const emptySale = await salesModel.createNew();

    sales.forEach(async (sale) => {
        await salesModel.fillNew(emptySale.insertId, sale.productId, sale.quantity);
    });
    
    return {
        id: emptySale.insertId,
        itemsSold: sales,
      };
};

const updateExistent = async (saleId, quantity, productId) => {
    salesModel.updateExistent(saleId, quantity, productId);
    return { saleId, itemUpdated: [{ productId, quantity }] };
};

module.exports = {
    getAll,
    getById,
    createNew,
    updateExistent,
};