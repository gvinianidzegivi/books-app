const { model, Schema, default: mongoose } = require('mongoose');

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    anotation: {
      type: String,
      required: false,
    },
    img_url: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);
