var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'us-cdbr-iron-east-02.cleardb.net',
    user: 'be137a0eff3840',
    password: 'e3d9fcbc',
    database: 'heroku_24e75f446011559',
    charset: 'utf8'
  }
});

var bookshelf = module.exports = require('bookshelf')(knex);