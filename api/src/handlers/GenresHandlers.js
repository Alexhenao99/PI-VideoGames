const { apiGenres, createGenres, getAllGenres, getGenresByName, getGenreById, updateGenre, deleteGenre } = require('../controllers/GenresControllers.js');




// Posts
const apiGenresHandler = async (  req, res ) => {
    try {
        const Genres = await apiGenres();
        res.status( 201 ).json( Genres );
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const createGenreHandler = async ( req, res ) => {
    const { name }  = req.body
    try {
        const response = await createGenres({ name })
        res.status( 201 ).json( response )
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Gets
const getGenresHandler = async ( req, res ) => {
    const { name } = req.query
    try {
        const response = name ? await getGenresByName( name ) : await getAllGenres();
        res.status( 200 ).json( response );
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
const getGenreHandler = async ( req, res ) => {
    const { id } = req.params;
    try {
        const response = await getGenreById( id );
        res.status( 200 ).json( response );
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Put
const PutGenreHandler = async ( req, res ) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const response = await updateGenre( id, name )
        res.status( 200 ).json( response );
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Delete
const deleteGenreHandler = async ( req, res ) => {
    const { id } = req.params;
    try {
        const response = await deleteGenre( id );
        res.status( 200 ).json( response )
    } catch (error) {
        res.status( 400 ).json({ error: error.message });
    }
};

module.exports ={
    apiGenresHandler,
    createGenreHandler,
    getGenresHandler,
    getGenreHandler,
    PutGenreHandler,
    deleteGenreHandler
};