DROP DATABASE IF EXISTS opentable;
CREATE DATABASE opentable;

\c opentable;

CREATE TABLE photos (
  id INTEGER PRIMARY KEY NOT NULL,
  id_r INTEGER NOT NULL,
  pic_id INTEGER NOT NULL,
  restaurant VARCHAR NOT NULL,
  timestamp VARCHAR NOT NULL,
  url VARCHAR NOT NULL,
  dislike INTEGER NOT NULL
);

CREATE INDEX rest_id ON photos(id_r);
CREATE INDEX rest_name ON photos(restaurant);
CREATE INDEX rest_time ON photos(timestamp);

COPY photos(id, id_r, pic_id, restaurant, timestamp, url, dislike) 
FROM '/Users/SunWei-Tse/Google/HackReactor/opentable/ost_photos/data1.csv' DELIMITER ',' CSV HEADER;
