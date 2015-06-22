var lessons = require('../controllers/lessons.server.controller.js');

module.exports = function(app) {
  app.get('/lessons', lessons.list);
  app.post('/lessons', lessons.create);
};