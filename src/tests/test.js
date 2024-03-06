import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app.js';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testing', () => {
  describe('Math', () => {
    it('should add two numbers', () => {
      const result = 2 + 3;
      expect(result).to.equal(5);
    });
  });
});
