const Book = require('../../models/book.js');

const getBooks = async (req, res) => {
  try {
    const { query } = req.query;
    const books = await Book.find({
      title: { $regex: query || '', $options: 'i' },
    });
    res.status(200).json(books);
  } catch (error) {
    throw error;
  }
};

const getBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (error) {
    throw error;
  }
};

const addBook = async (req, res) => {
  try {
    const body = req.body;
    const book = new Book({
      title: body.title,
      author: body.author,
      anotation: body.anotation,
      img_url: body.img_url,
    });

    const newBook = await book.save();
    const allBooks = await Book.find();

    res
      .status(201)
      .json({ message: 'Book added', Book: newBook, Books: allBooks });
  } catch (error) {
    throw error;
  }
};

const updateBook = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateBook = await Book.findByIdAndUpdate({ _id: id }, body);
    const allBooks = await Book.find();
    res.status(200).json({
      message: 'Book updated',
      book: updateBook,
      books: allBooks,
    });
  } catch (error) {
    throw error;
  }
};

const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndRemove(req.params.id);
    const allBooks = await Book.find();
    res.status(200).json({
      message: 'Book deleted',
      book: deletedBook,
      Books: allBooks,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
};
