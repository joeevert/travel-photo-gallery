-- table for database travel-gallery
CREATE TABLE galleryitems (
    id SERIAL PRIMARY KEY,
	path VARCHAR (250),
	description VARCHAR (250),
    likes INTEGER
);

-- test items
INSERT INTO galleryitems (path, description, likes)
VALUES ('images/cambodia.jpg', 'Photo of a Cambodia.', 0);

INSERT INTO galleryitems (path, description, likes)
VALUES ('images/croatia.jpg', 'Photo of a Croatia.', 0);

INSERT INTO galleryitems (path, description, likes)
VALUES ('images/peru.jpg', 'Photo of a Peru.', 0);

INSERT INTO galleryitems (path, description, likes)
VALUES ('images/italy.jpg', 'Photo of a Italy.', 0);

INSERT INTO galleryitems (path, description, likes)
VALUES ('images/myanmar.jpg', 'Photo of a Myanmar.', 0);

INSERT INTO galleryitems (path, description, likes)
VALUES ('images/utah.jpg', 'Photo of a Utah.', 0);

UPDATE galleryitems SET likes=likes+1 WHERE id=1;