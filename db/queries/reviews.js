

/*

DO NOT NEED TO IMPLIMENT UNLESS AVAILABLE TIME, AS IT IS NOT IN REQUIREMENTS

const db = require('../connection');

const addReview = () => {
  return db.query(`
  INSERT INTO reviews ()

  ;`)
    .then(data => {
      return data.rows;
    });
};

const showReviews = () =>{


};

module.exports = {
  addReview,
  showReviews
};

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  rating INTEGER,
  comments VARCHAR(1000)
);
*/
