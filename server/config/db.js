var knex = require('knex')({
  client: 'mysql',
  connection: DATABASE_URL
});

var bookshelf = module.exports = require('bookshelf')(knex);
