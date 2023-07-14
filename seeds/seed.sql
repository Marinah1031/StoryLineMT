-- Insert sample data into users table
INSERT INTO users (username, password)
VALUES ('johnsmith', 'password123'),
       ('janedoe', 'securepassword');

-- Insert sample data into diary_entries table
INSERT INTO diary (title, content, user_id)
VALUES ('First Entry', 'This is my first diary entry.', 1),
       ('Second Entry', 'I had a great day today!', 2);