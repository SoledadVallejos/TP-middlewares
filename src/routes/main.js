const router = require('express').Router();
const{index, contact, about, music} = require('../controllers/mainController')

router
    .get('/', index)
    .get('/contact', contact)
    .get('/about', about)
    .get('/music', music)

module.exports = router;