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

const updateExistent = async (id, name, quantity) => {
    const [update] = await connection
    .execute('UPDATE StoreManager.products SET name = ?, quantity = ? WHERE products.id = ?;',
    [name, quantity, id]);
    return update;
};

const deleteExistent = async (id) => {
    const [deleted] = await connection
    .execute('DELETE FROM StoreManager.products WHERE products.id = ?', [id]);
    return deleted;
};

module.exports = {
    getAll,
    getById,
    createNew,
    updateExistent,
    deleteExistent,
};