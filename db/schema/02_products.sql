DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  FOREIGN KEY(owner_id) REFERENCES users(user_id) NOT NULL,
  FOREIGN KEY(category_id) REFERENCES categories(id) NOT NULL,
  name VARCHAR(255) NOT NULL,
  price MONEY NOT NULL,
  description text,
  photo_url VARCHAR(255)
);


--Should we have integer for category_id?
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  FOREIGN KEY(owner_id) REFERENCES users(user_id) NOT NULL,
  FOREIGN KEY(category_id) REFERENCES categories(id) NOT NULL,
  name VARCHAR(255) NOT NULL,
  price MONEY NOT NULL,
  description text,
  photo_url VARCHAR(255)
  date_posted TIMESTAMP,
  number_of_product INTEGER,
  purchase_status VARCHAR(255),
);
