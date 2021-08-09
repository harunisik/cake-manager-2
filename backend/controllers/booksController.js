function booksController(Book) {
  function post(req, res) {
    const book = new Book(req.body);
    if (!req.body.name || !req.body.comment || !req.body.imageUrl || !req.body.yumFactor) {
      res.status(400);
      return res.send('Please make sure all required fields are provided.');
    }

    book.save();
    res.status(201);

    return res.json(book);
  }

  function get(req, res) {
    Book.find({}, (err, books) => {
      if (err) {
        return res.send(err);
      }
      const returnBooks = books.map((book) => {
        const newBook = book.toJSON();
        newBook.links = {};
        newBook.links.self = `http://${req.headers.host}/api/books/${book._id}`;
        return newBook;
      });
      return res.json(returnBooks);
    });
  }
  return { post, get };
}

module.exports = booksController;
