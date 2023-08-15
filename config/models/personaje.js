module.exports = (sequelize, DataTypes) => {
    const Personaje = sequelize.define('Personaje', {
      // Atributos aquí
    });
  
    Personaje.associate = (models) => {
      Personaje.belongsToMany(models.Personaje, { through: 'PersonajePelicula' });
    };
  
    return Personaje;
  };
  