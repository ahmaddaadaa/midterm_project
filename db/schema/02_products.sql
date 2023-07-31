--Should we have integer for category_id?
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  CONSTRAINT FOREIGN KEY(user_id) REFERENCES users(id) NOT NULL,
  name VARCHAR(255) NOT NULL,
  price MONEY NOT NULL,
  category_type VARCHAR(255) NOT NULL,
  description text NOT NULL,
  photo_url VARCHAR(255),
  date_posted TIMESTAMP NOT NULL,
  is_sold BOOLEAN DEFAULT false,
);

