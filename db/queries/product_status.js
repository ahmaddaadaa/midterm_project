const db = require('../connection');

const getProductStatus = () => {
  return db.query('SELECT * FROM product_status;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getProductStatus };
