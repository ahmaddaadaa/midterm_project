const db = require('../connection');

const getReviews = () => {
  return db.query('SELECT * FROM reviews;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getReviews };
