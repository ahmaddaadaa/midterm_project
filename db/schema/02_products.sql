--Should we have integer for category_id?
DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  price MONEY,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  photo_url VARCHAR(255),
  is_sold BOOLEAN
);
