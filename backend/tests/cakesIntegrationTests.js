require('should');

const request = require('supertest');
const mongoose = require('mongoose');

process.env.ENV = 'Test';

const app = require('../app.js');

const Cake = mongoose.model('Cake');
const agent = request.agent(app);

describe('Cake Crud Test', () => {
  it('should allow a cake to be posted and return read and _it', (done) => {
    const cakePost = { name: 'My Cake', comment: 'Jon', imageUrl: 'Fiction', yumFactor: 1 };

    agent
      .post('/api/cakes')
      .send(cakePost)
      .expect(200)
      .end((err, results) => {
        //console.log(results);
        //results.body.read.should.not.equal(false);
        results.body.should.have.property('_id');
        done();
      });
  });

  afterEach((done) => {
    Cake.deleteMany({}).exec();
    done();
  });

  after((done) => {
    mongoose.connection.close();
    app.server.close(done());
  });
});
