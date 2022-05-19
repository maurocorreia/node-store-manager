const { expect } = require('chai');
const sinon = require('sinon');
const saleService = require('../../../services/Sales');
const saleController = require('../../../controllers/Sales');

describe('Sales Controller', () => {
  describe('Função getAll()', () => {
    describe('Quando retorna uma resposta', () => {
      const mockResponse = [
        {
          saleId: 1,
          date: "2021-09-09T04:54:29.000Z",
          productId: 1,
          quantity: 2
        },
        {
          saleId: 1,
          date: "2021-09-09T04:54:54.000Z",
          productId: 2,
          quantity: 2
        }
      ];

      const req = {};
      const res = {};

      before(() => {
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        sinon.stub(saleService, 'getAll').resolves(mockResponse);
      });

      after(() => saleService.getAll.restore());

      it('Retorna um array.', async () => {
        await saleController.getAll(req, res);
        expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
      })
    })
  });

  describe('Função getById()', () => {
    describe('Quando retorna uma resposta', () => {
      const mockResponse = [
        {
          date: "2021-09-09T04:54:29.000Z",
          productId: 1,
          quantity: 2
        },
        {
          date: "2021-09-09T04:54:54.000Z",
          productId: 2,
          quantity: 2
        }
      ];

      const req = { params: { id: 1 } };
      const res = {};

      before(() => {
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        sinon.stub(saleService, 'getById').resolves(mockResponse);
      });

      after(() => saleService.getById.restore());

      it('Retorna um array.', async () => {
        await saleController.getById(req, res);
        expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
      })
    })
  });

  describe('Função createNew()', () => {
    describe('Quando a requisição é feita corretamente', () => {
      const mockResponse = { id: 1, itemsSold: [{ productId: 1, quantity: 3 }] };

      before(() => {
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        sinon.stub(saleService, 'createNew').resolves(mockResponse);
      });

      const req = { body: [{ productId: 1, quantity: 3 }] };
      const res = {};

      after(() => saleService.createNew.restore());

      it('Retorna um objeto.', async () => {
        await saleController.createNew(req, res);
        expect(res.json.calledWith(sinon.match.object)).to.be.equal(true);
      });
    });
  });

  describe('Função updateExistent()', () => {
    describe('Quando a requisição é feita corretamente', () => {
      const mockResponse = { saleId: 1, itemUpdated: [{ productId: 1, quantity: 6 }] };

      before(() => {
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        sinon.stub(saleService, 'updateExistent').resolves(mockResponse);
      });

      const req = { body: [{ productId: 1, quantity: 3 }], params: { id: 1 } };
      const res = {};

      after(() => saleService.updateExistent.restore());

      it('Retorna um objeto.', async () => {
        await saleController.updateExistent(req, res);
        expect(res.json.calledWith(sinon.match.object)).to.be.equal(true);
      })
    });
  });
});
