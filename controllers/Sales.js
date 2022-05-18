const salesService = require('../services/Sales');

const getAll = async (_req, res, next) => {
    try {
        const result = await salesService.getAll();
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await salesService.getById(id);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};
module.exports = {
    getAll,
    getById,
};