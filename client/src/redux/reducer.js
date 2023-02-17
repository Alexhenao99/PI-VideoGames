import { GET_GAMES } from "./actions"

const initalState = {
    games: []
}

export default function rootReducer( state = initalState, action) {
    switch (action.type) {
        case GET_GAMES:
            return {
                ...state,
                games: action.payload
            }
        default:
            return {...state}
    }
}