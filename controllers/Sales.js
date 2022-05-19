const salesService = require('../services/Sales');

const getAll = async (_req, res, next) => {
    try {
        const response = await salesService.getAll();
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await salesService.getById(id);
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
};

const createNew = async (req, res, next) => {
    try {
        const response = await salesService.createNew(req.body);
        res.status(201).json(response); 
    } catch (err) {
        next(err);
    }
};

const updateExistent = async (req, res, next) => {
    try {
        const { quantity, productId } = req.body[0];
        const saleId = req.params.id;
        
        const response = await salesService.updateExistent(saleId, quantity, productId);
        res.status(200).json(response); 
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAll,
    getById,
    createNew,
    updateExistent,
};