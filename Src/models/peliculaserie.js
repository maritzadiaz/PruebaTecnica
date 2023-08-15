'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PeliculaSerie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PeliculaSerie.init({
    imagen: DataTypes.STRING,
    titulo: DataTypes.STRING,
    fechaCreacion: DataTypes.DATE,
    calificacion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PeliculaSerie',
  });
  return PeliculaSerie;
};