
DROP KEYSPACE IF EXISTS test;
CREATE KEYSPACE test WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };

USE test;

CREATE TABLE mytest (
   id TIMEUUID PRIMARY KEY,
   id_r INT,
   pic_id INT,
   restaurant VARCHAR,
   timestamp VARCHAR,
   url VARCHAR,
   dislike INT
);

-- INSERT INTO mytest (id, id_r, restaurant) VALUES (now(), 1, 'KFC');



COPY mytest (id,id_r,pic_id,restaurant,timestamp,url,dislike) 
FROM '/Users/SunWei-Tse/Google/HackReactor/opentable/ost_photos/data2.csv' 
WITH HEADER = TRUE;

SELECT * FROM mytest;