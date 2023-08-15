module.exports = (sequelize, DataTypes) => {
    const Genero = sequelize.define('Genero', {
      // Atributos aquí
    });
  
    Genero.associate = (models) => {
      Personaje.belongsToMany(models.Genero, { through: 'PersonajePelicula' });
    };
  
    return Personaje;
  };
  