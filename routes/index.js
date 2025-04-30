const express = require('express');
const router = express.Router();
const { getMovies, postMovie } = require('../controllers/movieController');

// Ruta GET
router.get('/', getMovies);

// Ruta POST
router.post('/', postMovie);

module.exports = router;
