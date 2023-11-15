const Router = require('express');
const {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
} = require('../controllers/books/books');

console.log('getBooks');

const router = Router();

router.get('/books', getBooks);

router.post('/add-book', addBook);

router.put('/edit-book/:id', updateBook);

router.delete('/delete-book/:id', deleteBook);

module.exports = router;
