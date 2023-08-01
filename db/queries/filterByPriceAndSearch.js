const { options } = require('../../routes/users-api');
const db = require('../connection');

const filterAllItems = () => {

  const queryParams = [];

  let queryString = `
  SELECT name, price
  FROM products
`;

  //REFACTOR LATER
  //The space for connecting query strings is after the WHERE clause and at the end of where AND is used

  let isWhereInputted = typeof (Boolean);

  if (options.name) {
    queryParams.push(`%${options.name}%`);
    queryString += `WHERE name LIKE $${queryParams.length} `;
    isWhereInputted = true;
  }

  if (options.min_price && options.max_price) {
    queryParams.push(options.min_price);
    queryParams.push(options.max_price);
    if (!isWhereInputted) {
      queryString += `WHERE price BETWEEN $${queryParams.length - 1} AND $${queryParams.length} `;
      isWhereInputted = true;
    }
    queryString += `AND price BETWEEN $${queryParams.length - 1} AND $${queryParams.length} `;
  }

  if (!options.min_price && options.max_price) {
    queryParams.push(options.max_price);
    if (!isWhereInputted) {
      queryString += `WHERE price < $${queryParams.length} `;
      isWhereInputted = true;
    }
    queryString += `AND price < $${queryParams.length} `;
  }

  if (options.min_price && !options.max_price) {
    queryParams.push(options.min_price);
    if (!isWhereInputted) {
      queryString += `WHERE price > $${queryParams.length} `;
      isWhereInputted = true;
    }
    queryString += `AND price > $${queryParams.length} `;
  }

  //Adds ordering
  queryString+=`
  ORDER BY price `

  //This will be written differntly depending on what this format option is on the front end
  if(!options.ascOrDesc){
    queryString+=`DESC`
  }
  queryString+=`ASC`




  return db.query(queryString, queryParams).then((res) => res.rows);
};


module.exports = { filterByPrice };


// WHERE price ${maxOrMin}
// ORDER BY price $2
// LIMIT 10;
