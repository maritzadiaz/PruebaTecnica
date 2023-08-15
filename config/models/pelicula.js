module.exports = (sequelize, DataTypes) => {
    const Pelicula = sequelize.define('Pelicula', {
      // Atributos aquí
    });
  
    Pelicula.associate = (models) => {
      Personaje.belongsToMany(models.Pelicula, { through: 'PersonajePelicula' });
    };
  
    return Personaje;
  };
  