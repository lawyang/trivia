const express = require('express');
const router = express.Router();
var data = require('../../data/trivia.json');

router.get('/', (req, res) => {
    console.log('data', data);
    res.send(data);
})

module.exports = router;