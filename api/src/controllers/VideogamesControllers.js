const { Videogame, Genre } = require('../db.js');
const { Op } = require('sequelize');
const axios = require('axios');
const { apiAllCleaner, apiIdCleaner } = require('./utils/utilsApiGames.js');

// .env
require('dotenv').config();
const { API_KEY } = process.env;


// Posts
const createGame = async ( name, description, image, releaseDate, rating, genres ) => {
    // Crea el juego
    const newGame = await Videogame.create({ name, description, image, releaseDate, rating });
    
    // Relacione videogames con genres
    await newGame.addGenre( genres );

    return newGame;
};

// Gets
const getAllGames = async () => {
    // Variables 
    let api = `https://api.rawg.io/api/games?key=${API_KEY}`;
    let apiGames = [];
    
    // BD
    const bdGames = await Videogame.findAll({
        include: {
            model: Genre,
            as: 'genres', 
            attributes: [ "id","name" ],
            through: {
                // y de la tabla intermedia.....
                attributes: [],
            },
            order: [
                    ['ASC']
                ],
        },
    });
    
    // Api
    for (let i = 1; i <= 5; i++) { 
        const dataApi = ( await axios.get( api )).data;    
        
        // Filtra los datos de la api para traerlos con el formato de la Db
        const apiG = apiAllCleaner(dataApi);
        
        // Concatena los datos en el array
        apiGames = apiGames.concat(apiG);
        
        // Cambia el valor de la URL por el URL de la pagina siguiente
        api = dataApi.next;
    }
    
    // Concatena los datos de la api y de la Db
    return [ ...bdGames, ...apiGames ];
}
const getGamesByName = async ( name ) => {
    // Url
    const url = `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`;
    
    // BD
    const bdGame = await Videogame.findAll({
        where: {
            name: { [Op.iLike]: `%${name}%` }
        },
        include: {
            model: Genre,
            as: 'genres', 
            attributes: [ "id","name" ],
            through: {
                attributes: [],
            },
            order: [
                ['ASC']
            ],
        },
    });
    
    // Api
    const dataApi = ( await axios.get( url )).data;
    const apiGames = apiAllCleaner(dataApi);
    
    const response = [ ...bdGame, ...apiGames ];

    if( !response.length ){
        throw Error( `${name} does not exist in the databases` );
    }  
    return response ;
};
const getGameById = async ( id, source) => {
    // Url
    const url = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;
    
    if(source === "api") {
        const dataApi = ( await axios.get( url )).data;
        const apiGames = apiIdCleaner(dataApi);
        return apiGames;
    } else {
        const response = await Videogame.findByPk(id, {
            include: {
                model: Genre,
                as: 'genres', 
                attributes: [ "id","name" ],
                through: {
                    attributes: [],
                },
                order: [
                    ['ASC']
                ],
            },
        });
        if( !response ) throw Error( `not exist` );
        return response;
    };
};


// Put
const updateGame = async ( id, name, description, image, releaseDate, rating, genres ) => {
    // Comprueba si existe el Juego
    const game = await Videogame.findByPk( id );
    if( !game ) throw Error( `The id: ${id} does not exist` );

    // Comprueba si falta algun dato
    if ( !name || !description || !image || !releaseDate || !rating || !genres ) throw Error('Missing Data');

    // Actualiza la tabla de relaciones de generos
    await game.setGenres( genres );

    // Actualiza los datos
    await Videogame.update(
        { name, description, image, releaseDate, rating },
        {
            where: { id }
        }
    )
    return `${name} has been updated`;
};

// Delete
const deleteGame = async ( id ) => {
    const gameToDelete = await Videogame.findByPk( id );
    await gameToDelete.destroy();
    return `${gameToDelete.name} has been successfully removed`;
};

module.exports ={
    createGame,
    getAllGames,
    getGamesByName,
    getGameById,
    updateGame,
    deleteGame
};