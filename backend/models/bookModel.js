const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookModel = new Schema({
  name: { type: String },
  comment: { type: String },
  imageUrl: { type: String },
  yumFactor: { type: Number },
});

module.exports = mongoose.model('Book', bookModel);
