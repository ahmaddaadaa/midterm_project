const { options } = require('../../routes/users-api');
const db = require('../connection');

const filterPriceAndSearch = () => {

  const queryParams = [];

  //   let queryString = `
  //   SELECT name, price
  //   FROM productss
  // `;
  // This is from before I seeded categories.


  //Category search query string

  let queryString = `
SELECT name, price, categories.type as category_type
FROM products
INNER JOIN categories ON products.id = categories.id
WHERE 1=1 `;



  //REFACTOR LATER
  //The space for connecting query strings is after the WHERE clause and at the end of where AND is used

  let isWhereInputted = typeof (Boolean);

  //Filter by product name
  if (options.name) {
    queryParams.push(`%${options.name}%`);
    queryString += `WHERE products.name LIKE $${queryParams.length} `;
    isWhereInputted = true;
  }

  //Filter by category
  if (options.categories) {
    queryParams.push(options.categories);
    if (isWhereInputted) {
      queryString += `AND categories.type = $${queryParams.length} `;
    } else {
      queryString += `WHERE categories.type =$${queryParams.length} `;
      isWhereInputted = true;
    }
  }
    // Filter by both max and min
    if (options.min_price && options.max_price) {
      queryParams.push(options.min_price);
      queryParams.push(options.max_price);
      if (!isWhereInputted) {
        queryString += `WHERE products.price BETWEEN $${queryParams.length - 1} AND $${queryParams.length} `;
        isWhereInputted = true;
      }
      queryString += `AND products.price BETWEEN $${queryParams.length - 1} AND $${queryParams.length} `;
    }

    //Filter by min
    if (!options.min_price && options.max_price) {
      queryParams.push(options.max_price);
      if (!isWhereInputted) {
        queryString += `WHERE products.price < $${queryParams.length} `;
        isWhereInputted = true;
      }
      queryString += `AND products.price < $${queryParams.length} `;
    }

    //Filter by max
    if (options.min_price && !options.max_price) {
      queryParams.push(options.min_price);
      if (!isWhereInputted) {
        queryString += `WHERE price > $${queryParams.length} `;
        isWhereInputted = true;
      }
      queryString += `AND price > $${queryParams.length} `;
    }

    //Adds ordering
    queryString += `
  ORDER BY price `;

    //Filter by ascending or descending, ascending is happy path default
    if (!options.ascOrDesc) {
      queryString += `DESC`;
    }



  return db.query(queryString, queryParams).then((res) => res.rows);
};


module.exports = { filterPriceAndSearch };
