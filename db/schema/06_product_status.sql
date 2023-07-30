DROP TABLE IF EXISTS product_status CASCADE;
CREATE TABLE product_status (
  id SERIAL PRIMARY KEY NOT NULL,
  product_id INTEGER,
  date_posted TIMESTAMP,
  number_of_items INTEGER,
  purchase_status VARCHAR(255),
);
