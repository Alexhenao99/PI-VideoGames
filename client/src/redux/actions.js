import axios from 'axios'

export const CREATE_GAME     = "CREATE_GAME";
export const GET_GAMES       = "GET_USERS";
export const GET_GENRES      = "GET_GENRES";
export const CREATE_GENRES   = "CREATE_GENRES";
export const GET_DETAILS     = "GET_DETAILS";
export const SEARCH_GAMES    = "SEARCH_GAMES";
export const FILTER_CREATED  = "FILTER_CREATED";
export const FILTER_ORDER    = "FILTER_ORDER";
export const FILTER_RATING   = "FILTER_RATING";
export const FILTER_GENRE    = "FILTER_GENRE";
export const FILTER_PLATFORM = "FILTER_PLATFORM";

// Create
export const createGame = ( game ) => {
    const url = "http://localhost:3001/games";
    return async function( dispatch ) {
        try {
            await axios.post( url, game)
            alert( "Game created" )
            return dispatch({ 
                type: CREATE_GAME, 
            })
        } catch (error) {
            console.log( error );
            alert( "The game has not been created" )
        }
    }
};
// export const createGenre = ({ genre }) => {
//     const url = "http://localhost:3001/genres";
//     return async function( dispatch ) {
//         // try {
//             console.log(genre);
//         //     await axios.post( url, genre)
//         //     alert( "Game created" )
//         //     return dispatch({ 
//         //         type: CREATE_GAME, 
//         //     })
//         // } catch (error) {
//         //     console.log( error );
//         // }
//     }
// };

// Get info
export const getGames = () => {
    const url = "http://localhost:3001/games";
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
    const url = "http://localhost:3001/genres";
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
    const url = `http://localhost:3001/games/${id}`;
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
    const url = `http://localhost:3001/games?name=${name}`;
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