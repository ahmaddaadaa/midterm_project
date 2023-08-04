const db = require('../connection');


const showProducts = (options) => {
  let queryString = `SELECT * FROM products
  WHERE 1=1 `;
  let paramsArray =[];
  if(options.product_name){
    queryString += ` AND name = $1 `
    paramsArray.push(options.product_name)
  }
  queryString += ` ORDER BY products.id DESC LIMIT 10 `
  return db.query(queryString,paramsArray)
  .then((res) => {
    return res.rows;
  })
    
};

module.exports = { showProducts };
