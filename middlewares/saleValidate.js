const saleValidate = (req, _res, next) => {
    req.body.forEach((sale) => {
        if (!sale.productId) next({ status: 400, message: '"productId" is required' });
        if (!sale.quantity) next({ status: 400, message: '"quantity" is required' });
        if (sale.quantity <= 0) {
 next({ status: 422, message: '"quantity" must be greater than or equal to 1' }); 
    } 
});
    next();
};

module.exports = saleValidate;