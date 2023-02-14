const { Router } = require('express');

// Routers;
const videogamesRouter = require('./Videogames')
const genresRouter = require('./Genres')

const router = Router();

// Configuracion de los routers
router.use( '/games', videogamesRouter )
router.use( '/genres', genresRouter )


module.exports = router;
