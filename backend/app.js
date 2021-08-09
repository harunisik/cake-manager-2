const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://root:root@mongodb/', { useNewUrlParser: true, useUnifiedTopology: true });

const port = process.env.PORT || 8080;
const Cake = require('./models/cakeModel');
const cakeRouter = require('./routes/cakeRouter')(Cake);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', cakeRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;
