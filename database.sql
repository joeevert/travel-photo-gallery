-- table for database travel-gallery
CREATE TABLE galleryitems (
    id SERIAL PRIMARY KEY,
	path VARCHAR (250),
	description VARCHAR (250),
    likes INTEGER DEFAULT 0
);

-- test items
INSERT INTO galleryitems (path, description)
VALUES ('images/cambodia.jpg', 'Photo of a Cambodia.');

INSERT INTO galleryitems (path, description)
VALUES ('images/croatia.jpg', 'Photo of a Croatia.');

INSERT INTO galleryitems (path, description)
VALUES ('images/peru.jpg', 'Photo of a Peru.');

INSERT INTO galleryitems (path, description)
VALUES ('images/italy.jpg', 'Photo of a Italy.');

INSERT INTO galleryitems (path, description)
VALUES ('images/myanmar.jpg', 'Photo of a Myanmar.');

INSERT INTO galleryitems (path, description)
VALUES ('images/utah.jpg', 'Photo of a Utah.');

UPDATE galleryitems SET likes=likes+1 WHERE id=1;