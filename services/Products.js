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

const createNew = async (name, quantity) => {
    const allProducts = await getAll();
    const alreadyExist = allProducts.some((product) => product.name === name);

    if (alreadyExist) {
        const err = { status: 409, message: 'Product already exists' };
        throw err;
    }

    const response = await productModel.createNew(name, quantity);
    console.log(response);

    return {
        id: response.insertId,
        name,
        quantity,
    };
};

module.exports = {
    getAll,
    getById,
    createNew,
};