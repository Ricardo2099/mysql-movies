const express = require('express');
const router = express.Router();
const { getMovies, postMovie, deleteMovie } = require('../controllers/movieController');

router.get('/', getMovies);
router.post('/', postMovie);
router.delete('/:id', deleteMovie); 

module.exports = router;
