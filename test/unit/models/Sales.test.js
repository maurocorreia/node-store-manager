const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../models/Sales');
const connection = require('../../../models/Connection');

describe('Sales Model', () => {
  describe('Função getAll()', () => {
    describe('Quando retorna uma resposta', () => {
      const mockResponse = [[
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
      ]];

      before(() => {
        sinon.stub(connection, 'execute').resolves(mockResponse);
      });

      after(() => connection.execute.restore());

      it('Retorna um array.', async () => {
        const response = await salesModel.getAll();
        expect(response).to.be.an('array');
      })
    })
  });

  describe('Função getById()', () => {
    describe('Quando retorna uma resposta', () => {
      const mockResponse = [[{
        date: "2022-05-19T20:11:38.000Z",
        productId: 2,
        quantity: 10
      }]];

      before(() => {
        sinon.stub(connection, 'execute').resolves(mockResponse);
      });

      after(() => connection.execute.restore());

      it('Retorna um array.', async () => {
        const response = await salesModel.getById(1);
        expect(response).to.be.an('array');
      })
    })
  });
});