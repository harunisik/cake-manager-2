function cakesController(Cake) {
  function post(req, res) {
    const cake = new Cake(req.body);
    if (!req.body.name || !req.body.comment || !req.body.imageUrl || !req.body.yumFactor) {
      res.status(400);
      return res.send('Please make sure all required fields are provided.');
    }

    cake.save();
    res.status(201);

    return res.json(cake);
  }

  function get(req, res) {
    Cake.find({}, (err, cakes) => {
      if (err) {
        return res.send(err);
      }
      const returnCakes = cakes.map((cake) => {
        const newCake = cake.toJSON();
        newCake.links = {};
        newCake.links.self = `http://${req.headers.host}/api/cakes/${cake._id}`;
        return newCake;
      });
      return res.json(returnCakes);
    });
  }
  return { post, get };
}

module.exports = cakesController;
