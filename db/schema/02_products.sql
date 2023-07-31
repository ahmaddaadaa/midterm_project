DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER NOT NULL,
  name VARCHAR(255) NOT NULL,
  category_id VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  description text,
  photo_url VARCHAR(255)
);


--Should we have integer for category_id?
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  CONSTRAINT FOREIGN KEY(owner_id) REFERENCES users(id) NOT NULL,
  CONSTRAINT FOREIGN KEY(category_id) REFERENCES categories(id) NOT NULL,
  name VARCHAR(255) NOT NULL,
  price MONEY NOT NULL,
  number_of_product INTEGER NOT NULL,
  category_type VARCHAR(255) NOT NULL,
  description text NOT NULL,
  photo_url VARCHAR(255) date_posted TIMESTAMP NOT NULL,
  purchase_status BOOLEAN DEFAULT true,
);
