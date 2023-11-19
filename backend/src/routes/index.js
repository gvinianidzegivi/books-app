const { Router } = require('express');

const auth = require('./auth');
const books = require('./books');

const rootRouter = Router();

rootRouter.use('/books', books);
rootRouter.use('/auth', auth);

module.exports = rootRouter;
