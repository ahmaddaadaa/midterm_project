DROP TABLE IF EXISTS reviews CASCADE;
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  CONSTRAINT FOREIGN KEY(user_id) REFERENCES users(id) NOT NULL,
  CONSTRAINT FOREIGN KEY(product_id) REFERENCES products(id) NOT NULL,
);
