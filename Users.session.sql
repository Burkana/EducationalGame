CREATE TABLE Users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  names TEXT,
  email VARCHAR(255) NOT NULL UNIQUE,
  passwords VARCHAR(32),
  coins INT DEFAULT 100
);

CREATE TABLE CompletedLevels (
  user_id INT,
  level INT,
  PRIMARY KEY (user_id, level)
);

