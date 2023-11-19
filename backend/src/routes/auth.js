const { Router } = require('express');
const { register, login } = require('../controllers/auth/auth');

const router = Router();

router.post('/books', register);
router.post('/books/:id', login);

module.exports = router;
