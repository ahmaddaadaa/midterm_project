const db = require('../connection');


const showProducts = () => {
  return db.query(`
  SELECT * FROM products
  ORDER BY products.id DESC
  LIMIT 10
  ;`)
    
};

module.exports = { showProducts };
