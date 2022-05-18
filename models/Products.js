const connection = require('./Connection');

const getAll = async () => {
    const [products] = await connection
    .execute('SELECT id, name, quantity FROM StoreManager.products');
    return products;
};

const getById = async (id) => {
    const [product] = await connection
    .execute('SELECT id, name, quantity FROM StoreManager.products WHERE id = ?', [id]);
    return product;
};

const createNew = async (name, quantity) => {
    const [product] = await connection
    .execute('INSERT INTO StoreManager.products (name, quantity) VALUES(?, ?)', [name, quantity]);
    return product;
};

module.exports = {
    getAll,
    getById,
    createNew,
};