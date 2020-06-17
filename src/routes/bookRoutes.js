const express = require('express');
const bookController = require('../controllers/bookController');
const bookService = require('../services/goodreads');

const bookRouter = express.Router();

const router = (nav) => {
  const { getIndex, getById, middleware } = bookController(bookService, nav);
  bookRouter.use(middleware);
  bookRouter.route('/')
    .get(getIndex);
  bookRouter.route('/:id')
    .get(getById);
  return bookRouter;
};

module.exports = router;
