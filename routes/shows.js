const express = require('express')
const { Show, User } = require('../models/index.js')

const router = express.Router()

//GET all shows
router.get('/', async function (req, res) {
    const shows = await Show.findAll();
    res.json(shows);
})


//GET one show
router.get('/:showId', async function (req, res) {
    const show = await Show.findByPk(req.params.showId);
    if (show) {
        res.json(show);
    } else {
        res.status(404).send('Show not found');
    };
});

//GET show of a particular genre
router.get('/genres/:genre', async function (req, res) {
    const shows = await Show.findAll({
        where: { 
            genre: req.params.genre 
        }
        
    })
    res.json(shows)
})

//PUT update rating of a show
router.put('/showId/:watched', async function (req, res) {
    const show = await Show.findByPk(req.params.showId);
    if (show) {
        show.rating = req.params.rating;
        await show.save();
        res.json(show);
    } 
})


//PUT update the status of a show stored in a key of available
router.put('/:showId/updates', async function (req, res) {
    const show = await Show.findByPk(req.params.showId);
    if (show) {
        show.available = req.params.available; //Toggle the value of show.available
        await show.save();
        res.json(show);
    } else {
    res.status(404).send('Not found');
    };
});


//DELETE a show
router.delete('/:showId/delete', async function (req, res) {
    const show = await Show.findByPk(req.params.showId);
    if (show) {
        await show.destroy();
        res.json(show);
    } else {
        res.status(404).send('Not found')
    }
});


module.exports = router;
