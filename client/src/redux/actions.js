import axios from 'axios'

export const CREATE_GAME     = "CREATE_GAME";
export const UPGRADE_GAME    = "UPGRADE_GAME";
export const GET_GAMES       = "GET_USERS";
export const GET_GENRES      = "GET_GENRES";
export const GET_DETAILS     = "GET_DETAILS";
export const SEARCH_GAMES    = "SEARCH_GAMES";
export const FILTER_CREATED  = "FILTER_CREATED";
export const FILTER_ORDER    = "FILTER_ORDER";
export const FILTER_RATING   = "FILTER_RATING";
export const FILTER_GENRE    = "FILTER_GENRE";
export const FILTER_PLATFORM = "FILTER_PLATFORM";
export const DELETE_GAME     = "DELETE_GAME";


// Create
export const createGame = ( game ) => {
    const url = "/games";
    return async function( dispatch ) {
        try {
            await axios.post( url, game)
            return dispatch({ 
                type: CREATE_GAME, 
            })
        } catch (error) {
            console.log( error );
            alert( `${ game.name } game already exists` )
        }
    }
};

// Get Games
export const getGames = () => {
    const url = "/games";
    return async function( dispatch ) {
        try {
            const games = await axios.get( url )
            return dispatch({ 
                type: GET_GAMES, 
                payload: games.data
            })
        } catch (error) {
            console.log( error );
        }
    }
}
export const getGenres = () => {
    const url = "/genres";
    return async function ( dispatch ) {
        try {
            const genres = await axios.get( url )
            return dispatch({ 
                type: GET_GENRES, 
                payload: genres.data
            })
            
        } catch (error) {
            console.log( error );
        }
    }
}
export const getDetails = ( id ) => {
    const url = `/games/${id}`;
    return async function ( dispatch ) {
        try {
            const detail = await axios.get( url )
            return dispatch({
                type: GET_DETAILS,
                payload: detail.data
            })
        } catch (error) {
            
        }
    }
};
export const searchGames = ( name ) => {
    const url = `/games?name=${name}`;
    return async function ( dispatch ) {
        try {
            const games = await axios.get( url )
            return dispatch({ 
                type: SEARCH_GAMES, 
                payload: games.data
            })
            
        } catch (error) {
            console.log( error );
        }
    }
}

// Update Game
export const updateGames = ( id, game ) => {
    const url = `/games/${id}`
    const update = async ( dispatch ) => {
        try {
            await axios.put( url, game )
            alert( `${game.name} has been upgraded` )
            return dispatch({ 
                type: CREATE_GAME, 
            })
        } catch (error) {
            console.log( error );
            alert( `${ game.name } could not be updated` )
        }
    };
    return update
};

// Delete Game
export const deleteGame = ( id ) => {
    const url = `/games/delete/${id}`
    return async function ( dispatch ){
        try {
            await axios.delete( url )
            return dispatch({ 
                type: CREATE_GAME, 
            })
        } catch (error) {
            console.log(error);
            alert( "The game could not be deleted" )
        }
    }
};

// Filters
export const filterCreated = ( payload ) => {
    return {
        type: FILTER_CREATED,
        payload
    }
};
export const filterOrdered = ( payload ) => {
    return {
        type: FILTER_ORDER,
        payload
    }
};
export const filterRating = ( payload ) => {
    return {
        type: FILTER_RATING,
        payload
    }
};
export const filterPlatform = ( payload ) => {
    return {
        type: FILTER_PLATFORM,
        payload
    }
};
export const filterGenre = ( payload ) => {
    return {
        type: FILTER_GENRE,
        payload
    }
};