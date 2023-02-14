const { 
    createGame, 
    getGamesByName, 
    getAllGames, 
    getGameById, 
    updateGame, 
    deleteGame 
} = require("../controllers/VideogamesControllers");


// Posts
const createGameHandler = async ( req, res ) => {
    const { name, description, image, releaseDate, rating, genres } = req.body;
    try {
        const newGame = await createGame( name, description, image, releaseDate, rating, genres );
        res.status(201).json( newGame );
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Gets
const getGamesHandler = async ( req, res ) => {
    const { name } = req.query;
    try {
        const response = name ? await getGamesByName( name ) : await getAllGames();
        res.status(200).json( response );
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
const getGameHandler = async ( req, res ) => {
    const { id } = req.params;
    const source = isNaN(id) ? "db" : "api";
    try {
        const response = await getGameById( id, source );
        res.status(200).json( response );
    } catch (error) {
        res.status(404).json({ error: `The id: ${id} does not exist` });
    }
};


// Put
const putGameHandler = async ( req, res ) => {
    const { id } = req.params;
    const { name, description, image, releaseDate, rating, genres } = req.body;
    try {
        const response = await updateGame( id, name, description, image, releaseDate, rating, genres );
        res.status( 200 ).json( response );
    } catch (error) {
        res.status( 400 ).json({ error: error.message });
    }
};


// Delete
const deleteGameHandler = async ( req, res ) => {
    const { id } = req.params;
    try {
        const response = await deleteGame( id );
        res.status( 200 ).json( response )
    } catch (error) {
        res.status( 400 ).json({ error: error.message });
    }
};

module.exports ={
    createGameHandler,
    getGamesHandler,
    getGameHandler,
    putGameHandler,
    deleteGameHandler,
};