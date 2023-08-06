const db = require('../connection');


const showProducts = (options) => {
  console.log("INSIDE SHOW PRODUCTS----------------------");
  const queryParams = [];
  let queryString = `
    SELECT products.*, users.email
    FROM products
    JOIN users ON users.id = products.user_id
    WHERE 1=1
  `;

  if (options.product_name) {
    queryParams.push(`%${options.product_name}%`);
    queryString += ` AND products.name LIKE $${queryParams.length}`;
    console.log("-------------------------------", options);
  }

  // //Filter by category (type)
  if (options.product_category) {
    queryParams.push(options.product_category);
    queryString += ` AND type = $${queryParams.length} `;
  }

  // Filter by both max and min
  if (options.min_price && options.max_price) {
    queryParams.push(options.min_price);
    queryParams.push(options.max_price);
    queryString += ` AND products.price BETWEEN $${queryParams.length - 1} AND $${queryParams.length} `;
  }

  //Filter by min
  if (!options.min_price && options.max_price) {
    queryParams.push(options.max_price);
    queryString += ` AND products.price < $${queryParams.length} `;
  }

  //Filter by max
  if (options.min_price && !options.max_price) {
    queryParams.push(options.min_price);
    queryString += ` AND price > $${queryParams.length} `;
  }

  queryString += ` ORDER BY products.id DESC`;
  
  console.log(queryString);

  return db.query(queryString, queryParams).then((res) => res.rows);
};


module.exports = { showProducts };
