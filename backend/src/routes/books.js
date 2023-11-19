const { Router } = require('express');
const {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
  getBook,
  searchBook,
} = require('../controllers/books/books');

const router = Router();

router.get('/books', getBooks);
router.get('/books/:id', getBook);
router.post('/add-book', addBook);
router.put('/edit-book/:id', updateBook);
router.delete('/delete-book/:id', deleteBook);

module.exports = router;
