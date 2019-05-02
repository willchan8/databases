var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', (err, rows) => {
        if (err) {
          console.log(err) 
        }
        console.log(rows);
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      db.query(SELECT)
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {},
    post: function (user, callback) {}
  }
};

