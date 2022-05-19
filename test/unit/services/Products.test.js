const { expect } = require('chai');
const sinon = require('sinon');
const productService = require('../../../services/Products');
const productModel = require('../../../models/Products');

describe('Product Services', () => {
  describe('Função getAll()', () => {
    describe('Quando retorna uma resposta', () => {
      const mockResponse = [
        {
          id: 1,
          name: "produto A",
          quantity: 10
        },
        {
          id: 2,
          name: "produto B",
          quantity: 20
        }
      ];

      before(() => {
        sinon.stub(productModel, 'getAll').resolves(mockResponse);
      });

      after(() => productModel.getAll.restore());

      it('Retorna um array.', async () => {
        const response = await productService.getAll();
        expect(response).to.be.an('array');
      })
    })
  });

  describe('Função getById()', () => {
    describe('Quando retorna uma resposta', () => {
      const mockResponse = [{
        id: 1,
        name: "produto A",
        quantity: 10
      }];

      before(() => {
        sinon.stub(productModel, 'getById').resolves(mockResponse);
      });

      after(() => productModel.getById.restore());

      it('Retorna um array.', async () => {
        const response = await productService.getById();
        expect(response).to.be.an('array');
      })
    })
  });

  describe('Função createNew()', () => {
    describe('Quando a requisição é feita corretamente', () => {
      const mockResponse = { id: 1, name: "produto", quantity: 10 };

      before(() => {
        sinon.stub(productModel, 'createNew').resolves(mockResponse);
      });

      after(() => productModel.createNew.restore());

      it('Retorna um objeto.', async () => {
        const response = await productService.createNew();
        expect(response).to.be.an('object');
      })
    })
  });

  describe('Função updateExistent()', () => {
    describe('Quando a requisição é feita corretamente', () => {
      const mockAll = [{ id: 1, name: "Produto", quantity: 15 }, { id: 2, name: "Produto", quantity: 15 }];
      const mockOne = { id: 1, name: "Produto", quantity: 15 }

      const id = 1;
      const name = 'Product';
      const quantity = 15;

      before(() => {
        sinon.stub(productModel, 'updateExistent').resolves(mockOne);
        sinon.stub(productModel, 'getAll').resolves(mockAll);
      });

      after(() => productModel.updateExistent.restore());

      it('Retorna um objeto.', async () => {
        const response = await productService.updateExistent(id, name, quantity);
        expect(response).to.be.an('object');
      })
    })
  });

})