const productModel = require('../models/Products');

const getAll = async () => {
    const products = await productModel.getAll();
    return products;
};

const getById = async (id) => {
    const product = await productModel.getById(id);

    if (!product.length) {
        const error = { status: 404, message: 'Product not found' };
        throw error;
    }

    return product;
};

module.exports = {
    getAll,
    getById,
};