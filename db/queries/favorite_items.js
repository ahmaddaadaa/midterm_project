const db = require('../connection');

const addFavoriteItems = (user_id, favoriteProduct) => {

  return db.query(`
  INSERT INTO favorite_items (user_id, product_id)
  VALUES ($1, $2)
  RETURNING *;`, [user_id, favoriteProduct])
    .then((data) => {
      return data.rows[0];
    }).catch((error) => {
      console.log(error)
    });
};



const showFavoriteItems = (user_id) => {
  return db.query(`
  SELECT * FROM favorite_items
  JOIN products ON


  ;`)
    .then(data => {
      return data.rows;
    });
};


module.exports = {
  addFavoriteItems,
  showFavoriteItems
 };
