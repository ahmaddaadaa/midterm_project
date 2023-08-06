const db = require('../connection');



const getProductId = (product_name) => {
  return db.query(
    `SELECT id FROM products WHERE name = $1;`,
    [product_name]
  )
    .then((data) => {
      return data.rows[0];
    })
    .catch((error) => {
      console.log(error);
    });
};




module.exports = {
  getProductId
 };
