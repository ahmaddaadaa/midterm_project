const db = require('../connection');

//The input should be a button on the icon on the main page?

const addFavoriteItems = (user_id, product_id) => {
  return db.query(
    `
    INSERT INTO favorite_items (user_id, product_id)
    VALUES ($1, $2)
    RETURNING *;
    `,
    [user_id, product_id]
  )
    .then((data) => {
      return data.rows[0];
    })
    .catch((error) => {
      console.log(error);
    });
};




const showFavoriteItems = (user_id) => {
  return db.query(`
    SELECT name, price, type, description, photo_url, is_sold, date 
    FROM products
    JOIN favorite_items ON favorite_items.product_id = products.id
    WHERE favorite_items.user_id = $1;
  `, [user_id])
    .then((data) => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error);
    });
};



module.exports = {
  addFavoriteItems,
  showFavoriteItems
 };
