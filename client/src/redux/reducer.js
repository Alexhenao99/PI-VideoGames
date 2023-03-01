import { 
    CREATE_GAME,
    DELETE_GAME,
    UPGRADE_GAME,
    FILTER_CREATED, 
    FILTER_GENRE, 
    FILTER_ORDER, 
    FILTER_PLATFORM, 
    FILTER_RATING, 
    GET_DETAILS, 
    GET_GAMES, 
    GET_GENRES, 
    SEARCH_GAMES,
} from "./actions"

const initalState = {
    // createGame: null,
    games: [],
    detailGame: [],
    searchGames: [],
    gamesFilter: [],
    genresFilter: [],
}

export default function rootReducer( state = initalState, { type, payload }) {
    switch ( type ) {
        case CREATE_GAME:
            return{
                ...state,
            }
        case UPGRADE_GAME:
            return{
                ...state,
            }
        case DELETE_GAME:
            return {
                ...state,
            };
        case GET_GAMES:
            return {
                ...state,
                games: payload,
                gamesFilter: payload,
            };
        case GET_GENRES:
            return {
                ...state,
                genresFilter: payload,
            };
        case GET_DETAILS:
                return {
                    ...state,
                    detailGame: payload
                };
        case SEARCH_GAMES:
                return {
                    ...state,
                    searchGames: payload
                };    
        case FILTER_CREATED:
            const gamesCreatedFilter = state.gamesFilter;
            const createdFilter = payload === "created"  
                ? gamesCreatedFilter.filter( game => game.created === true ) 
                : gamesCreatedFilter.filter( game => game.created === false );
            return{
                ...state,
                games: payload === "All" ? gamesCreatedFilter : createdFilter,
            };
        case FILTER_ORDER: 
            const gamesNameFilter = state.games;
            const nameFilter = payload === "asc"  
                ? gamesNameFilter.slice().sort( function(a, b) {
                    if( a.name.toLowerCase() < b.name.toLowerCase() ) return -1;
                    if( b.name.toLowerCase() < a.name.toLowerCase() )  return 1;
                    return 0;
                }) : 
                gamesNameFilter.slice().sort( function(a, b) {
                    if( a.name.toLowerCase() > b.name.toLowerCase() ) return -1;
                    if( b.name.toLowerCase() > a.name.toLowerCase() )  return 1;
                    return 0;
                })
            return{
                ...state,
                games: nameFilter,
            };
        case FILTER_RATING: 
            const gamesRatingFilter = state.games;
            const ratingFilter = payload === "rAsc"
                ? gamesRatingFilter.slice().sort( function(a, b) {
                    if( a.rating > b.rating ) return -1;
                    if( b.rating > a.rating ) return 1;
                    return 0;
                }) : 
                gamesRatingFilter.slice().sort( function(a, b) {
                    if( a.rating < b.rating ) return -1 ;
                    if( b.rating < a.rating ) return 1;
                    return 0;
                })
            return{
                ...state,
                games: ratingFilter,
            };
        case FILTER_PLATFORM: 
            const gamesPlatformFilter = state.gamesFilter;
            const platformFilter = gamesPlatformFilter
                .filter( game => game.parent_platforms
                .map( p => p.toLowerCase())
                .includes( payload ) );
            return{
                ...state,
                games: payload === "All" ? gamesPlatformFilter : platformFilter,
            };
        case FILTER_GENRE: 
            const gamesGenreFilter = state.gamesFilter;
            const genresFilter = payload === "All" 
                ? gamesGenreFilter 
                : gamesGenreFilter
                    .filter( game => game.genres
                        .map( p => p.name)
                        .includes( payload )
                    );
        return{
                ...state,
                games: genresFilter.length === 0  ? `Not found games with the genre: ${ payload }` : genresFilter,
            };
        default:
            return { ...state };
    }
}