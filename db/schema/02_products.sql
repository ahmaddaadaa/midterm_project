DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER NOT NULL,
  name VARCHAR(255) NOT NULL,
  -- category_id VARCHAR(255) NOT NULL,  not sure on what datatype we want
  price INTEGER NOT NULL,
  description text,
  photo_url VARCHAR(255)
);
