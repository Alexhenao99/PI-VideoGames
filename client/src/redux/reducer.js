import { FILTER_CREATED, GET_GAMES } from "./actions"

const initalState = {
    games: [],
    gamesCreatedFilter: [],
}

export default function rootReducer( state = initalState, { type, payload }) {
    switch ( type ) {
        case GET_GAMES:
            return {
                ...state,
                games: payload,
                gamesCreatedFilter: payload,
            };
        case FILTER_CREATED:
            const gamesCreatedFilter = state.gamesCreatedFilter;
            const createdFilter = payload === "created"  
                ? gamesCreatedFilter.filter( game => game.created === true ) 
                : gamesCreatedFilter.filter( game => game.created === false );
            return{
                ...state,
                games: payload === "All" ? gamesCreatedFilter : createdFilter,
            };
        default:
            return { ...state };
    }
}