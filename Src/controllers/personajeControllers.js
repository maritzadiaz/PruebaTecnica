

const db = require('../models');

exports.getAllPersonaje = async (req, res) => {
    try {
        const personaje = await db.Personaje.findAll({
            attributes: ['imagen', 'nombre'],
        });
        res.json(personaje);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los personajes' });
    }
};

exports.getpersonajeyId = async (req, res) => {
    const persnajeId = req.params.id;
    try {
        const personaje = await db.Personaje.findByPk(personajeId, {
            include: [
                {
                    model: db.Pelicula,
                    attributes: ['id', 'titulo', 'imagen', 'fechaCreacion', 'calificacion'],
                },
            ],
        });
        if (!personaje) {
            return res.status(404).json({ message: 'Personaje no encontrado' });
        }
        res.json(personaje);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el personaje' });
    }
};

exports.getPersonajeById = async (req, res) => {
    const personajeId = req.params.id;
    try {
        const personaje = await db.Personaje.findByPk(personajeId, {
            include: [
                {
                    model: db.Pelicula,
                    attributes: ['id', 'titulo', 'imagen', 'fechaCreacion', 'calificacion'],
                },
            ],
        });
        if (!personaje) {
            return res.status(404).json({ message: 'Personaje no encontrado' });
        }
        res.json(personaje);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el personaje' });
    }
};
