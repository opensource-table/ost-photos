DROP DATABASE IF EXISTS opentable;
CREATE DATABASE opentable;

\c opentable;

CREATE TABLE photos (
  id INTEGER PRIMARY KEY NOT NULL,
  id_r INTEGER NOT NULL,
  resName VARCHAR NOT NULL,
  pic_id INTEGER NOT NULL,
  timestamp VARCHAR NOT NULL,
  url VARCHAR NOT NULL
);

CREATE INDEX rest_id ON photos(id_r);
CREATE INDEX rest_name ON photos(resName);

COPY photos(id, id_r, resName, pic_id, timestamp, url) 
-- FROM '/Users/SunWei-Tse/Google/HackReactor/opentable/ost_photos/data1.csv' DELIMITER ',' CSV HEADER;
FROM '../../../home/ec2-user/data1.csv' DELIMITER ',' CSV HEADER;
