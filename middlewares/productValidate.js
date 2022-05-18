const productValidate = (req, _res, next) => {
    const { name, quantity } = req.body;
    if (!name) next({ status: 400, message: '"name" is required' });
    if (name.length < 5) {
 next(
        { status: 422, message: '"name" length must be at least 5 characters long' },
        ); 
}
    if (!quantity) next({ status: 400, message: '"quantity" is required' });
    if (quantity <= 0) {
 next(
        { status: 422, message: '"quantity" must be greater than or equal to 1' },
); 
}
    next();
};

module.exports = productValidate;
