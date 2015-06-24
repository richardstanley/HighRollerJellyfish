var knex = require('knex')({
  client: 'mysql',
  connection: process.env.DATABASE_URL
});

var bookshelf = module.exports = require('bookshelf')(knex);
