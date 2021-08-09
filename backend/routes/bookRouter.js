/* eslint-disable no-param-reassign */
const express = require('express');
const booksController = require('../controllers/booksController');

function routes(Book) {
  const bookRouter = express.Router();
  const controller = booksController(Book);

  bookRouter.route('/books').post(controller.post).get(controller.get);

  bookRouter.use('/books/:bookId', (req, res, next) => {
    Book.findById(req.params.bookId, (err, book) => {
      if (err) {
        return res.send(err);
      }

      if (book) {
        req.book = book;
        return next();
      }

      return res.sendStatus(404);
    });
  });

  bookRouter
    .route('/books/:bookId')
    .get((req, res) => {
      const returnBook = req.book.toJSON();
      res.json(returnBook);
    })
    .put((req, res) => {
      const { book } = req;
      book.name = req.body.name;
      book.comment = req.body.comment;
      book.imageUrl = req.body.imageUrl;
      book.yumFactor = req.body.yumFactor;

      req.book.save((err) => {
        if (err) {
          return res.send(err);
        }
        return res.json(book);
      });
    })
    .delete((req, res) => {
      req.book.remove((err) => {
        if (err) {
          return res.send(err);
        }
        return res.sendStatus(204);
      });
    });

  return bookRouter;
}

module.exports = routes;
