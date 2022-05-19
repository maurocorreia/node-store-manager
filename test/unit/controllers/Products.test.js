const { expect } = require('chai');
const sinon = require('sinon');
const productService = require('../../../services/Products');
const productController = require('../../../controllers/Products');

describe('Product Controller', () => {
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

      const req = {};
      const res = {};

      beforeEach(() => {
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        sinon.stub(productService, 'getAll').resolves(mockResponse);
      });

      afterEach(() => productService.getAll.restore());

      it('Retorna um array.', async () => {
        await productController.getAll(req, res);
        expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
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

      const req = { params: { id: 1 } };
      const res = {};

      before(() => {
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        sinon.stub(productService, 'getById').resolves(mockResponse);
      });

      after(() => productService.getById.restore());

      it('Retorna um objeto.', async () => {
        await productController.getById(req, res);
        expect(res.json.calledWith(sinon.match.object)).to.be.equal(true);
      })
    })
  });

  describe('Função createNew()', () => {
    describe('Quando a requisição é feita corretamente', () => {
      const mockResponse = { id: 1, name: "produto", quantity: 10 };

      before(() => {
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        sinon.stub(productService, 'createNew').resolves(mockResponse);
      });

      const req = { body: { name: "Carro", quantity: 10 } };
      const res = {};

      after(() => productService.createNew.restore());

      it('Retorna um objeto.', async () => {
        await productController.createNew(req, res);
        expect(res.json.calledWith(sinon.match.object)).to.be.equal(true);
      })
    })
  });

  describe('Função updateExistent()', () => {
    describe('Quando a requisição é feita corretamente', () => {
      const mockResponse = { id: 1, name: "produto", quantity: 15 };

      before(() => {
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        sinon.stub(productService, 'updateExistent').resolves(mockResponse);
      });

      const req = { body: { name: "Carro", quantity: 10 }, params: 1 };
      const res = {};

      after(() => productService.updateExistent.restore());

      it('Retorna um objeto.', async () => {
        await productController.updateExistent(req, res);
        expect(res.json.calledWith(sinon.match.object)).to.be.equal(true);
      })
    })
  });

  describe('Função deleteExistent()', () => {
    describe('Quando a requisição é feita corretamente', () => {
      const mockResponse = [];

      before(() => {
        res.status = sinon.stub().returns(res);
        res.send = sinon.stub().returns();
        sinon.stub(productService, 'deleteExistent').resolves(mockResponse);
      });

      const req = { params: 1 };
      const res = {};

      after(() => productService.deleteExistent.restore());

      it('Não retorna nada.', async () => {
        await productController.deleteExistent(req, res);
        expect(res.send.called).to.be.equal(true);
      })
    })
  });
})