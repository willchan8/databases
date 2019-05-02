var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'SELECT * FROM messages';
      db.query(queryString, (err, results) => {
        if (err) {
          console.log(err);
        }
        callback(null, results);
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      var queryString = 'INSERT INTO messages (text, user_id, roomname)';
      db.query(queryString, )
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {},
    post: function (user, callback) {}
  }
};

