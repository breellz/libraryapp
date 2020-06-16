const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:adminRoutes');

const adminRouter = express.Router();

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

const router = (nav) => {
  adminRouter.route('/')
    .get((req, res) => {
      const url = 'mongodb://localhost:27017';
      const dbName = 'libraryApp';

      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url);
          debug('connected to the server correctly');

          const db = client.db(dbName);

          const response = await db.collection('books').insertMany(books);
          res.json(response);
        } catch (err) {
          debug(err.stack);
        }
        client.close();
      }());
    });
  return adminRouter;
};

module.exports = router;
