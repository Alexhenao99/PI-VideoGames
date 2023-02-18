import axios from 'axios'

export const GET_GAMES = 'GET_USERS';
export const FILTER_CREATED = 'FILTER_CREATED';


export const getGames = () => {
    const url = "http://localhost:3001/games"
    return async function ( dispatch ) {
        const games = await axios.get( url )
        return dispatch({ 
            type: GET_GAMES, 
            payload: games.data
        })
    }
}

export const filterCreated = ( payload ) => {
    return {
        type: FILTER_CREATED,
        payload
    }
};