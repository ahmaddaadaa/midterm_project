const db = require('../connection');

const getFavoriteItems = () => {
  return db.query('SELECT * FROM favorite_items;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getFavoriteItems };
