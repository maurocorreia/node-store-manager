const connection = require('./Connection');

const getAll = async () => {
    const [sales] = await connection
    .execute(
        `
        SELECT sale.id AS saleId,
        sale.date AS date,
        sale_detail.product_id AS productId,
        sale_detail.quantity AS quantity
        FROM StoreManager.sales AS sale
        JOIN sales_products AS sale_detail
        ON sale_detail.sale_id = sale.id
    `,
    );
    return sales;
};

const getById = async (id) => {
    const [sale] = await connection
    .execute(
        `
        SELECT sale.date AS date,
        sale_detail.product_id AS productId,
        sale_detail.quantity AS quantity
        FROM StoreManager.sales AS sale
        JOIN sales_products AS sale_detail
        ON sale_detail.sale_id = sale.id
        WHERE sale.id = ?
    `,
    [id],
    );
    return sale;
};

const createNew = async () => {
    const [sale] = await connection
    .execute('INSERT INTO StoreManager.sales (date) VALUES(now())');
    return sale;
};

const fillNew = async (saleId, productId, quantity) => {
    const [saleProduct] = await connection.execute(
        `
        INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
        VALUES(?,?,?)
        `,
    [saleId, productId, quantity],
);
    return saleProduct;
};

module.exports = {
    getAll,
    getById,
    createNew,
    fillNew,
};