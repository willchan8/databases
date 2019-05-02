CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT NOT NULL,
  username TEXT, 
  PRIMARY KEY (id)
);

CREATE TABLE roomnames (
  id INT NOT NULL,
  roomname TEXT, 
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id INT NOT NULL, 
  text TEXT, 
  username TEXT, 
  user_id INT,
  roomname_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (roomname_id) REFERENCES roomnames(id)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

