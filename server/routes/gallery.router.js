const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('L9', req.params);
    const galleryId = req.params.id;
    const sqlText = `UPDATE galleryitems SET likes=likes+1 WHERE id=$1;`;
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    pool.query(sqlText, [galleryId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making db query ${sqlText}`, error);
            res.sendStatus(500);
        })
 })

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM galleryitems ORDER BY id ASC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log('Got pics back from the db', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making db query ${sqlText}`, error);
            res.sendStatus(500);
        })
})

router.post('/', (req, res) => {
    const newPic = req.body;
    console.log('newPic', newPic);
    
    const sqlText = `INSERT INTO galleryitems (path, description) VALUES ($1, $2);`;
    pool.query(sqlText, [newPic.path, newPic.description])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making db query ${sqlText}`, error);
            res.sendStatus(500);
        })
})

module.exports = router;