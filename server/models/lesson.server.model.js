var bookshelf = require('../config/db');

var Lesson = bookshelf.Model.extend({
  tableName: 'lessons'
});

Lesson.add = function(lessonData, callback) {
  lesson = new Lesson(lessonData)
  .save()
  .then(function(model) {
    callback(model);
  })
  .catch(function(err) {
    callback(err);
  });
};

module.exports = Lesson;
