/* eslint-disable no-param-reassign */
const express = require('express');
const cakesController = require('../controllers/cakesController');

function routes(Cake) {
  const cakeRouter = express.Router();
  const controller = cakesController(Cake);

  cakeRouter.route('/cakes').post(controller.post).get(controller.get);

  cakeRouter.use('/cakes/:cakeId', (req, res, next) => {
    Cake.findById(req.params.cakeId, (err, cake) => {
      if (err) {
        return res.send(err);
      }

      if (cake) {
        req.cake = cake;
        return next();
      }

      return res.sendStatus(404);
    });
  });

  cakeRouter
    .route('/cakes/:cakeId')
    .get((req, res) => {
      const returnCake = req.cake.toJSON();
      res.json(returnCake);
    })
    .put((req, res) => {
      const { cake } = req;
      cake.name = req.body.name;
      cake.comment = req.body.comment;
      cake.imageUrl = req.body.imageUrl;
      cake.yumFactor = req.body.yumFactor;

      req.cake.save((err) => {
        if (err) {
          return res.send(err);
        }
        return res.json(cake);
      });
    })
    .delete((req, res) => {
      req.cake.remove((err) => {
        if (err) {
          return res.send(err);
        }
        return res.sendStatus(204);
      });
    });

  return cakeRouter;
}

module.exports = routes;
