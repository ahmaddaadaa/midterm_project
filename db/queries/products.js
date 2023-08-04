const db = require('../connection');


const showProducts = (options) => {
  console.log("INSIDE SHOW PRODUCTS----------------------")
  const queryParams = [];

  //   let queryString = `
  //   SELECT name, price
  //   FROM productss
  // `;
  // This is from before I seeded categories.

  let queryString = `
SELECT * FROM products
LEFT JOIN users ON users.id = products.user_id
WHERE 1=1
 `;

  //REFACTOR LATER
  //The space for connecting query strings is after the WHERE clause and at the end of where AND is used



  //Filter by product name
  if (options.product_name) {
    queryParams.push(`%${options.product_name}%`);
    queryString += `AND products.name LIKE $${queryParams.length}`;
    console.log("-------------------------------", options)
  }

  // //Filter by category (type)
  if (options.product_catagory) {
    queryParams.push(options.product_catagory);

      queryString += `AND type = $${queryParams.length} `;

  }
    // Filter by both max and min
    if (options.min_price && options.max_price) {
      queryParams.push(options.min_price);
      queryParams.push(options.max_price);
      queryString += `AND products.price BETWEEN $${queryParams.length - 1} AND $${queryParams.length} `;
    }

    //Filter by min
    if (!options.min_price && options.max_price) {
      queryParams.push(options.max_price);
      queryString += `AND products.price < $${queryParams.length} `;
    }

    //Filter by max
    if (options.min_price && !options.max_price) {
      queryParams.push(options.min_price);
      queryString += `AND price > $${queryParams.length} `;
    }

    //Adds ordering
    queryString += `
  ORDER BY price `;

    // //Filter by ascending or descending, ascending is happy path default
    // if (!options.ascOrDesc) {
    //   queryString += `DESC`;
    // }
console.log(queryString)


  return db.query(queryString, queryParams).then((res) => res.rows);

};

module.exports = { showProducts };
