const db = require('../connection');

const getUsers = () => {
  return db.query(`
  DROP TABLE IF EXISTS users CASCADE;
  CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    inbox text
  );`)
    .then(data => {

      return data.rows;
    });
};

module.exports = { getUsers };

