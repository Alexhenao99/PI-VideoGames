const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = ( sequelize ) => {
  // defino el modelo
  sequelize.define(
    'Videogame', 
    {
      id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        validate:{
          isUrl: true,
        },
        defaultValue: 'https://i.blogs.es/7796de/portada-xbox/840_560.jpeg'
      },
      releaseDate: {
        type: DataTypes.DATEONLY,
        validate:{
          isDate: true,  
        },
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
        validate:{
          max: 5.0,
          min: 0,
        },
        allowNull: false,
      },
      created:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    },
    {
      timestamps: false
    }
  );
};
