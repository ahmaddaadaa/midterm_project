const db = require('../connection');

const getItemCategory = () => {
  return db.query('SELECT * FROM categories;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getItemCategory };
