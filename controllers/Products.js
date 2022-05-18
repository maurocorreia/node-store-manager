const productService = require('../services/Products');

const getAll = async (_req, res, next) => {
    try {
        const result = await productService.getAll();
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await productService.getById(id);
        res.status(200).json(result[0]);
    } catch (err) {
        next(err);
    }
};
const createNew = async (req, res, next) => {
    try {
        const { name, quantity } = req.body;
        const create = await productService.createNew(name, quantity);
        res.status(201).json(create); 
    } catch (err) {
        next(err);
    }
};

const updateExistent = async (req, res, next) => {
    try {
        const { name, quantity } = req.body;
        const { id } = req.params;
        
        const update = await productService.updateExistent(id, name, quantity);
        res.status(200).json(update); 
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