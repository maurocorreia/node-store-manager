const saleValidate = (req, _res, next) => {
    const { productId, quantity } = req.body;
    if (!productId) next({ status: 400, message: '"productId" is required' });
    if (!quantity) next({ status: 400, message: '"quantity" is required' });
    if (quantity <= 0) {
 next(
        { status: 422, message: '"quantity" must be greater than or equal to 1' },
); 
}
    next();
};

module.exports = saleValidate;