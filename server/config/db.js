var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'classroom',
    charset: 'utf8'
  }
});

var bookshelf = module.exports = require('bookshelf')(knex);