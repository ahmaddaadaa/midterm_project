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


INSERT INTO products (user_id, name, price, type, description, photo_url, is_sold, date)
VALUES
  (1, 'Smartphone', 500, 'Electronics', 'User-friendly interface', 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', true, 1544666010224),
  (1, 'Laptop', 1000, 'Electronics', 'Powerful laptop for gaming.', 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', false, 1544666010224),
  (2, 'Cookware Set', 200, 'Appliance', 'High-quality cookware', 'https://images.unsplash.com/photo-1584990347449-fd98bc063110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80', false, 1544666010224),
  (2, 'Coffee Maker', 50, 'Appliance', 'Brew your favorite coffee!', 'https://images.unsplash.com/photo-1608354580875-30bd4168b351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80', true, 1544666016666),
  (3, 'Jacket', 30, 'Clothing', 'Stylish for casual outings.', 'https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80', false, 1544666010224),
  (3, 'Jeans', 40, 'Clothing', 'Women low rise stride', 'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80', false, 1544666010224),
  (4, 'Tennis Racket', 80, 'Sport', 'For tennis enthusiasts.', 'https://images.unsplash.com/photo-1558594187-6ac6484bf5d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80', false, 1544666010224),
  (4, 'Camping Tent', 150, 'Sport', 'For outdoor adventures.', 'https://images.unsplash.com/photo-1597226012661-ee865b212f51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80', true, 1544666010224),
  (5, 'Skincare Set', 120, 'beauty', 'For a glowing skin!', 'https://images.unsplash.com/photo-1633793565780-deeea84f167b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', true, 1544666010224),
  (5, 'Hair Dryer', 25, 'beauty', 'Efficient for daily use.', 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80', true, 1544666010224);



-- INSERT INTO favorite_items (user_id, product_id)
-- VALUES
--   (1, 3),
--   (1, 5),
--   (2, 1),
--   (2, 4),
--   (3, 8),
--   (3, 10),
--   (4, 7),
--   (4, 9),
--   (5, 2),
--   (5, 6);
