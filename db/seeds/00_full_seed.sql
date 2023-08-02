-- Users table seeds here (Example)
INSERT INTO users (name, email, password, inbox)
VALUES
  ('John Doe', 'john@example.com', 'hashed_password_1', 'inbox content 1'),
  ('Jane Smith', 'jane@example.com', 'hashed_password_2', 'inbox content 2'),
  ('Alice Johnson', 'alice@example.com', 'hashed_password_3', 'inbox content 3'),
  ('Bob Williams', 'bob@example.com', 'hashed_password_4', 'inbox content 4'),
  ('Eva Brown', 'eva@example.com', 'hashed_password_5', 'inbox content 5'),
  ('Michael Lee', 'michael@example.com', 'hashed_password_6', 'inbox content 6'),
  ('Olivia Martin', 'olivia@example.com', 'hashed_password_7', 'inbox content 7'),
  ('William Garcia', 'william@example.com', 'hashed_password_8', 'inbox content 8'),
  ('Sophia Martinez', 'sophia@example.com', 'hashed_password_9', 'inbox content 9'),
  ('James Robinson', 'james@example.com', 'hashed_password_10', 'inbox content 10');


INSERT INTO categories (type, description)
VALUES
  ('Electronics', 'Electronics and gadgets category'),
  ('Home and Kitchen', 'Home and kitchen products category'),
  ('Fashion', 'Fashion and clothing category'),
  ('Sports and Outdoors', 'Sports and outdoor equipment category'),
  ('Beauty', 'Beauty and personal care category'),
  ('Books', 'Books and literature category'),
  ('Toys and Games', 'Toys and games category'),
  ('Automotive', 'Automotive products category'),
  ('Health', 'Health and wellness category'),
  ('Pet Supplies', 'Pet supplies and accessories category');

INSERT INTO products (user_id, name, price, category_id, description, photo_url, is_sold)
VALUES
  (1, 'Smartphone', 500, 1, 'Latest smartphone with advanced features.', 'http://example.com/photo1.jpg', false),
  (1, 'Laptop', 1000, 1, 'Powerful laptop for work and gaming.', 'http://example.com/photo2.jpg', false),
  (2, 'Cookware Set', 200, 2, 'High-quality cookware set for your kitchen.', 'http://example.com/photo3.jpg', false),
  (2, 'Coffee Maker', 50, 2, 'Brew your favorite coffee with this machine.', 'http://example.com/photo4.jpg', false),
  (3, 'Summer Dress', 30, 3, 'Stylish summer dress for casual outings.', 'http://example.com/photo5.jpg', true),
  (3, 'Formal Shirt', 40, 3, 'Elegant formal shirt for business occasions.', 'http://example.com/photo6.jpg', false),
  (4, 'Tennis Racket', 80, 4, 'Quality tennis racket for tennis enthusiasts.', 'http://example.com/photo7.jpg', false),
  (4, 'Camping Tent', 150, 4, 'Spacious camping tent for outdoor adventures.', 'http://example.com/photo8.jpg', true),
  (5, 'Skincare Set', 50, 5, 'Complete skincare set for healthy skin.', 'http://example.com/photo9.jpg', false),
  (5, 'Hair Dryer', 25, 5, 'Fast and efficient hair dryer for daily use.', 'http://example.com/photo10.jpg', false);


INSERT INTO favorite_items (user_id, product_id)
VALUES
  (1, 3),
  (1, 5),
  (2, 1),
  (2, 4),
  (3, 8),
  (3, 10),
  (4, 7),
  (4, 9),
  (5, 2),
  (5, 6);

INSERT INTO reviews (user_id, product_id, rating, comments)
VALUES
  (1, 1, 5, 'Great smartphone with excellent camera.'),
  (1, 3, 4, 'Love the design of this summer dress.'),
  (2, 2, 4, 'Powerful laptop for all my tasks.'),
  (2, 5, 5, 'Effective skincare set for my skin.'),
  (3, 4, 4, 'Easy-to-use coffee maker.'),
  (3, 8, 5, 'Spacious and durable camping tent.'),
  (4, 3, 5, 'High-quality cookware set for my kitchen.'),
  (4, 7, 4, 'Good performance from the tennis racket.'),
  (5, 6, 3, 'The formal shirt fits well.'),
  (5, 10, 4, 'Convenient hair dryer for everyday use.');