const { Movie } = require('../models');

// Obtener todas las películas
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    if (movies.length === 0) {
      return res.status(404).json({ error: 'No se encontraron películas' });
    }
    res.status(200).json(movies);
  } catch (error) {
    console.error('Error al obtener películas:', error);
    res.status(500).json({ error: 'Error al obtener películas' });
  }
};

// Agregar una nueva película
const postMovie = async (req, res) => {
  try {
    const { title, director, year, synopsis, imageUrl } = req.body;
    const movie = await Movie.create({ title, director, year, synopsis, imageUrl });
    res.status(201).json(movie);
  } catch (error) {
    console.error('Error al agregar película:', error);
    res.status(500).json({ error: 'Error al agregar película' });
  }
};

module.exports = { getMovies, postMovie };
