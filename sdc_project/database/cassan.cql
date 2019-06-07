
DROP KEYSPACE IF EXISTS opentable;
CREATE KEYSPACE opentable WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };

USE opentable;

CREATE TABLE photos (
   id INT PRIMARY KEY,
   id_r INT,
   pic_id INT,
   restaurant VARCHAR,
   timestamp VARCHAR,
   url VARCHAR,
   dislike INT
);

-- INSERT INTO mytest (id, id_r, restaurant) VALUES (now(), 1, 'KFC');

CREATE INDEX rest_id ON photos(id_r);
CREATE INDEX rest_name ON photos(restaurant);
CREATE INDEX rest_time ON photos(timestamp);


COPY photos (id,id_r,pic_id,restaurant,timestamp,url,dislike) 
FROM '/Users/SunWei-Tse/Google/HackReactor/opentable/ost_photos/data1.csv' 
WITH HEADER = TRUE;

SELECT * FROM photos;