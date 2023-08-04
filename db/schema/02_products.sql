
DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  price MONEY,
  type VARCHAR(255),
  description TEXT NOT NULL,
  photo_url VARCHAR(255),
  is_sold BOOLEAN,
  date DATE

);
