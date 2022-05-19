const productService = require('../services/Products');

const getAll = async (_req, res, next) => {
    try {
        const response = await productService.getAll();
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await productService.getById(id);
        res.status(200).json(response[0]);
    } catch (err) {
        next(err);
    }
};
const createNew = async (req, res, next) => {
    try {
        const { name, quantity } = req.body;
        const response = await productService.createNew(name, quantity);
        res.status(201).json(response); 
    } catch (err) {
        next(err);
    }
};

const updateExistent = async (req, res, next) => {
    try {
        const { name, quantity } = req.body;
        const { id } = req.params;
        
        const response = await productService.updateExistent(id, name, quantity);
        res.status(200).json(response); 
    } catch (err) {
        next(err);
    }
};

const deleteExistent = async (req, res, next) => {
    try {
        const { id } = req.params;        
        await productService.deleteExistent(id);
        res.status(204).send();
    } catch (err) {
        next(err);
    }
}; 

module.exports = {
    getAll,
    getById,
    createNew,
    updateExistent,
    deleteExistent,
};