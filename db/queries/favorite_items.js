const db = require('../connection');

//The input should be a button on the icon on the main page?

const addFavoriteItems = (user_id, product_id, userInput) => {

  return db.query(`
  INSERT INTO favorite_items (user_id, product_id)
  VALUES ($1, $2)
  RETURNING *;`, [user_id, product_id])
    .then((data) => {
      return data.rows[0];
    }).catch((error) => {
      console.log(error)
    });
};



const showFavoriteItems = (user_id) => {
  return db.query(`
  SELECT * FROM favorite_items
  JOIN products ON product_id = products.id
  WHERE user_id = $1
  LIMIT 10
  ;`)
    .then(data => {
      return data.rows[0];
    }).catch((error)=>{
      console.log(error)
    });
};


module.exports = {
  addFavoriteItems,
  showFavoriteItems
 };
