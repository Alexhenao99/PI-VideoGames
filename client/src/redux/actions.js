import axios from 'axios'

export const GET_GAMES = 'GET_USERS'

const url = "http://localhost:3001/games"

export function getGames() {
    return async function ( dispatch ) {
        const games = await axios.get( url )
        return dispatch({ 
            type: GET_GAMES, 
            payload: games.data
        })
    }
}