# Other People's Travel Pics

This is a photo gallery app that allows user's to add, like, or delete photos. The user can also add a description to the photo that is viewed by clicking on a photo.

Link to Project: https://evert-travel-photo-gallery.herokuapp.com/

## Built With

* Javascript
* React
* Node.js
* CSS

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Before you get started, make sure you have the following software installed:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

### Create database

1. Create a new database called `travel-gallery`
2. Then create a table called `galleryitems`
3. Then add some images to the gallery

```SQL
CREATE DATABASE travel-gallery;

CREATE TABLE galleryitems (
    id SERIAL PRIMARY KEY,
	path VARCHAR (250),
	description VARCHAR (250),
    likes INTEGER DEFAULT 0
);

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
```

### Installing

Steps to get the development environment running.

1. Download this project.
2. Run `npm install`
3. Start PostgreSQL if not running already by using `brew services start postgresql`
4. Run `npm server`
5. `cmd + t` to open a new terminal window and Run `npm run client`
6. Navigate to `localhost:3000`

### Completed Features

- [x] Feature `get-gallery`
    - Used `axios` to retrieve data from the galleryitems table.
- [x] Feature `gallery-list`
    - GalleryList is a component that maps through the data from the galleryitems table.
- [x] Feature `gallery-item`
    - Component that is passed individual phots through props.
- [x] Feature `image-swap`
    - Conditionally renders a photo or description.
- [x] Feature `like-counter`
    - Onclick updates a photo's like count.
- [x] Feature `add-photos`
    - Created a form that allows user's to add to their gallery.


### Features To Add

- [ ] Material UI for styling
