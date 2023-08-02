const db = require('../connection');

const getItemCategory = () => {
  return db.query(`
  SELECT products.name, categories.type
  FROM products
  INNER JOIN categories ON products.id = categories.id
  ;`)
    .then(data => {
      return data.rows;
    });
};

// INNER JOIN categories ON products.id = categories.id;`

module.exports = { getItemCategory };
