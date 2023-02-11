const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = ( sequelize ) => {
  // defino el modelo
  sequelize.define(
    'Videogames', 
    {
      id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        defaultValue: 'https://i.blogs.es/7796de/portada-xbox/840_560.jpeg'
      },
      releaseDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      rating: {
        type: DataTypes.ENUM( 'Bad', 'Good', 'Excellent' )
      },
    },
    {
      timestamps: false
    }
  );
};
