DROP TABLE IF EXISTS reviews CASCADE;

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(user_id) NOT NULL,
  FOREIGN KEY(product_id) REFERENCES products(id) NOT NULL,
  rating INTEGER,
  comments VARCHAR(1000)
);
