const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../../models/Products');
const connection = require('../../../models/Connection');

describe('Products Model', () => {
  describe('Função getAll()', () => {
    describe('Quando retorna uma resposta', () => {
      const mockResponse = [[
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
      ]];

      before(() => {
        sinon.stub(connection, 'execute').resolves(mockResponse);
      });

      after(() => connection.execute.restore());

      it('Retorna um array.', async () => {
        const response = await productModel.getAll();
        expect(response).to.be.an('array');
      })
    })
  });

  describe('Função getById()', () => {
    describe('Quando retorna uma resposta', () => {
      const mockResponse = [[{
        id: 1,
        name: "produto A",
        quantity: 10
      }]];

      before(() => {
        sinon.stub(connection, 'execute').resolves(mockResponse);
      });

      after(() => connection.execute.restore());

      it('Retorna um array.', async () => {
        const response = await productModel.getById(1);
        expect(response).to.be.an('array');
      })
    })
  });
});