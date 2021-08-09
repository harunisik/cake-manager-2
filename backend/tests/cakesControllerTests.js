const should = require('should');
const sinon = require('sinon');
const cakeController = require('../controllers/cakesController');

describe('Cake Controller Tests:', () => {
  describe('Post', () => {
    it('should not allow an empty name on post', () => {
      const Cake = function (cake) {
        this.save = () => {};
      };

      const req = {
        body: {
          author: 'Jon',
        },
      };

      const res = {
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy(),
      };

      const controller = cakeController(Cake);
      controller.post(req, res);

      res.status.calledWith(400).should.equal(true, `Bad Status ${res.status.args[0][0]}`);
      res.send.calledWith('Please make sure all required fields are provided.').should.equal(true);
    });
  });
});
