const express = require('express');
const { User, Show } = require('../models/index.js');

const router = express.Router();

//GET all users
router.get('/', async function (req, res) {
    const users = await User.findAll({})
    res.json(users);
})

//GET one user
router.get('/:userId', async function (req, res) {
    const user = await users.findByPk(req.params.userId);
    if (user) {
        res.json(users);
    } else {
        res.status(404).send('Not found')
    }
});

//GET all shows watched by a user
router.get('/:userId/shows', async function (req, res) {
    const user = await User.findByPk(req.params.userId, {
        include: Show
    });
    if (user) {
        res.json(user.Shows);
    } else {
        res.status(404).send('User or Show not found')
    }
})
 
//PUT update and add a show if a user has watched it
router.put('/:userId/shows/:showId', async function (req, res) {
    const user = await User.findByPk(req.params.userId);
    const show = await User.findByPk(req.params.show);
    if (user && show) {
        await user.addShow(show);
        res.json({message: 'Show added to user'});
    } else {
        res.status(404).json({error: 'User or show not found'});
    }
})

module.exports = router;