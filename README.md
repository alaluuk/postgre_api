# day6

use library;
CREATE TABLE user_table(
  id_user INT primary key auto_increment,
  username VARCHAR(20),
  password VARCHAR(255),
  images VARCHAR(255),
  UNIQUE (username)
);