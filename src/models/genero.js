'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genero extends Model {
    
    static associate(models) {
      
    }
  }
  Genero.init({
    nombre: DataTypes.STRING,
    imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Genero',
  });
  return Genero;
};