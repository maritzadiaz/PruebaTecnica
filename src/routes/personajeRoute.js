const express = require('express');
const router = express.Router();
const { Personaje } = require('../models'); // Asegúrate de que la ruta sea correcta

// Ruta para obtener el listado de personajes
router.get('/personaje', async (req, res) => {
  try {
    const personaje = await personaje.findAll();
    res.json(personaje);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el listado de personajes' });
  }
});

module.exports = router;
