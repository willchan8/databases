var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var dbconnection = mysql.createConnection({
  user     : 'student',
  password : 'student',
  database : 'chat'
});
   
dbconnection.connect((err) => {
  if(err) {
    console.log('Error connecting to DB');
    return;
  }
  console.log('Connection established');
});

module.exports = {
  dbconnection
};