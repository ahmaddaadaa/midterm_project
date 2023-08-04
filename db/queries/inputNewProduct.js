const db = require('../connection');

const createProductRecord = (name, type, price, description, photo_url, date) => {
  //Counter starts after last seeded product
  let user_id = 1;
  let is_sold = true;
  return db.query(
      `INSERT INTO products (user_id, name, price, type, description, photo_url, is_sold, date)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`,
    [user_id, name, price, type, description, photo_url, is_sold, date])
    .then(() => {
      user_id++;
      console.log('Product was added!')
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};
module.exports = { createProductRecord };
