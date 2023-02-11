const { DataTypes } = require('sequelize');

module.exports = ( database ) => {
    database.define(
        'GenresToVideogames',{},{
            timestamps: false
        }
    )
}