CREATE TABLE User (
  id INTEGER NOT NULL,
  email TEXT NOT NULL,
  name TEXT,
  PRIMARY KEY (id),
  UNIQUE (email)
);
CREATE TABLE Post (
  id INTEGER NOT NULL,
  authorId INTEGER NOT NULL,
  title TEXT NOT NULL,
  published integer NOT NULL DEFAULT 0, -- Boolean
  PRIMARY KEY (id),
  FOREIGN KEY (authorId) REFERENCES User (id)
);
