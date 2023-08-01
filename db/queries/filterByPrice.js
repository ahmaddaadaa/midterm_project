const db = require('../connection');

const filterByPrice = () => {
  return db.query(`
  SELECT * FROM products
  ORDER BY price ASC
  ;`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { filterByPrice };
