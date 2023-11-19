const { Router } = require('express');

const auth = require('./auth');
const books = require('./books');

const rootRouter = Router();

rootRouter.use('/auth', auth);
rootRouter.use('/books', books);

module.exports = rootRouter;
