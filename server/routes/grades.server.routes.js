var grades = require('../controllers/grades.server.controller.js');
var jwt = require('jwt-simple');

module.exports = function(app) {
  app.get('/grades', function(req, res, next) {
      console.log("Authenticating...");
      var student = req.param('student');
      // We are sending our JWT token in the header of every request.
      // The header looks like this: {Authorization: 'Bearer TOKEN_STRING'}
      // So to access it, we split it on spaces and take the 1st index.
      var token = req.headers.authorization.split(' ')[1];
      if (token) {
        console.log("Token: ", token);
        // We are hardcoding our secret token in for now but in
        // production it should be an env variable.
        var decoded = jwt.decode(token, 'abc');
        console.log(decoded);
        if (student) {
          grades.listForUser(student, req, res, next);
        } else {
          grades.listAll(req, res, next);
        }
      } else {
        res.send("No token...\n");
      }
    },
    grades.listForUser
  );
  app.post('/grades', grades.create);
};
