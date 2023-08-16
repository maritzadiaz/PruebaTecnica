
const sequelize = require('./config/database');
const Personaje = require('./models/Personaje');
const PeliculaSerie = require('./models/PeliculaSerie');
const Genero = require('./models/Genero');
const PersonajePeliculaSerie = require('./models/PersonajePeliculaSerie');
const PeliculaSerieGenero = require('./models/PeliculaSerieGenero');

// Define las relaciones entre los modelos
Personaje.belongsToMany(PeliculaSerie, { through: PersonajePeliculaSerie });
PeliculaSerie.belongsToMany(Personaje, { through: PersonajePeliculaSerie });

PeliculaSerie.belongsToMany(Genero, { through: PeliculaSerieGenero });
Genero.belongsToMany(PeliculaSerie, { through: PeliculaSerieGenero });

// Sincroniza los modelos con la base de datos
sequelize.sync();

const characterRoutes = require('./routes/characterRoutes');
app.use(characterRoutes);

