const { expect } = require('chai');
const sinon = require('sinon');
const saleService = require('../../../services/Sales');
const saleModel = require('../../../models/Sales');

describe('Sales Services', () => {
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

      beforeEach(() => {
        sinon.stub(saleModel, 'getAll').resolves(mockResponse);
      });

      afterEach(() => saleModel.getAll.restore());

      it('Retorna um array.', async () => {
        const response = await saleService.getAll();
        expect(response).to.be.an('array');
      })
    })
  });

  describe('Função getById()', () => {
    describe('Quando retorna uma resposta', () => {
      const mockResponse = [{
        date: "2022-05-19T20:11:38.000Z",
        productId: 2,
        quantity: 10
      }];

      const id = 1;

      before(() => {
        sinon.stub(saleModel, 'getById').resolves(mockResponse);
      });

      after(() => saleModel.getById.restore());

      it('Retorna um array.', async () => {
        const response = await saleService.getById(id);
        expect(response).to.be.an('array');
      })
    })
  });

  describe('Função updateExistent()', () => {
    describe('Quando retorna uma resposta', () => {

      const saleId = 1;
      const quantity = 10;
      const productId = 1;

      it('Retorna um objeto.', () => {
        const response = saleService.updateExistent(saleId, quantity, productId);
        expect(response).to.be.an('object');
      })
    })
  });  
})