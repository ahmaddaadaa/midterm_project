DROP TABLE IF EXISTS categories CASCADE;
CREATE TABLE categories (
id SERIAL PRIMARY KEY NOT NULL,
-- id INTEGER NOT NULL,  Will need to figure out a different name
type VARCHAR(255)
);
