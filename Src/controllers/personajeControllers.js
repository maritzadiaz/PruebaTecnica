

const db = require('../models');

exports.getAllCharacters = async (req, res) => {
    try {
        const characters = await db.Personaje.findAll({
            attributes: ['imagen', 'nombre'],
        });
        res.json(characters);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los personajes' });
    }
};

exports.getCharacterById = async (req, res) => {
    const characterId = req.params.id;
    try {
        const character = await db.Personaje.findByPk(characterId, {
            include: [
                {
                    model: db.Pelicula,
                    attributes: ['id', 'titulo', 'imagen', 'fechaCreacion', 'calificacion'],
                },
            ],
        });
        if (!character) {
            return res.status(404).json({ message: 'Personaje no encontrado' });
        }
        res.json(character);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el personaje' });
    }
};

exports.getCharacterById = async (req, res) => {
    const characterId = req.params.id;
    try {
        const character = await db.Personaje.findByPk(characterId, {
            include: [
                {
                    model: db.Pelicula,
                    attributes: ['id', 'titulo', 'imagen', 'fechaCreacion', 'calificacion'],
                },
            ],
        });
        if (!character) {
            return res.status(404).json({ message: 'Personaje no encontrado' });
        }
        res.json(character);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el personaje' });
    }
};
