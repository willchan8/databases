var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) {
          res.statusCode = 400;
          res.end();
        }
        res.json(results);
      });
    }, 
    post: function (req, res) {
      var params = [req.body.mesasge, req.body.username, req.body.roomname];
      models.messages.post(params, function(err, results) {
        if (err) {
          console.log(err);
          return;
        } else {
          res.sendStatus(201);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) {
          console.log('error');
          return;
        }
        res.json(result);
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(err, results) {
        if (err) { console.log(err);
          return;
        } else {
          res.sendStatus(201);}
      });
    }
  }
};

