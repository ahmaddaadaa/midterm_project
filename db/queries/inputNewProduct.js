const db = require('../connection');

const createProductRecord = (name, type, price, description, photo_url) => {
  //Counter starts after last seeded product
  let user_id = 5;
  let is_sold = false;
  return db.query(
      `INSERT INTO products (user_id, name, price, type, description, photo_url, is_sold)
    VALUES ($1, $2, $3, $4, $5, $6, $7);`,
    [user_id, name, price, type, description, photo_url, is_sold])
    .then(() => {
      user_id++;
      console.log('Product was added!')
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};
module.exports = { createProductRecord };
