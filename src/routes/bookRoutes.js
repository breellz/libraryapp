const express = require('express');

const bookRouter = express.Router();

const router = (nav) => {
  const books = [{
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Lev Nikolayeky Tolstoy',
    read: false
  }, {
    title: 'Les Miserables',
    genre: 'Historical Fiction',
    author: 'Victor Hugo',
    read: false
  }, {
    title: 'The time machine',
    genre: 'Science Fiction',
    author: 'Jules Verne',
    read: false
  }, {
    title: 'The dark world',
    genre: 'Fantasy',
    author: 'Bassit Owolabi',
    read: false
  }, {
    title: 'The responsive electromaniac',
    genre: 'Fiction',
    author: 'Lev Tolstoy',
    read: false
  }
  ];
  bookRouter.route('/')
    .get((req, res) => {
      res.render(
        'booklistview',
        {
          title: 'Goodreads',
          nav,
          books
        }
      );
    });
  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render(
        'bookview',
        {
          title: 'Goodreads',
          nav,
          book: books[id]
        }
      );
    });
  return bookRouter;
};

module.exports = router;
