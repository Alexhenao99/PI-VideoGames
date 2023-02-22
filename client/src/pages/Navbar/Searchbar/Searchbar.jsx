import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import SearchVideogame from '../../../components/SearchVideogames/SearchVideogame';
import { searchGames } from '../../../redux/actions';
import Pagination from '../../../components/Pagination/Pagination';

const Searchbar = () => {
    const dispatch = useDispatch();
    const { name } = useParams();

    useEffect(() => {
        dispatch( searchGames( name ) )
    },[dispatch, name])

    const games = useSelector( state => state.searchGames);

    // //                  Paginado
    const [ currentPage, setCurrentPage ] = useState( 1 );
    const [ gamesPerPage ] = useState( 15 );

    const paginate = ( page ) => {
        setCurrentPage( page );
    };

    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGame = games.slice( indexOfFirstGame, indexOfLastGame );

    return (
        <div id="searchbar">
            <h1>Results with {name}!</h1>
            <SearchVideogame videogames={currentGame} />
            <Pagination 
                gamesPerPage={ gamesPerPage } 
                totalPosts={ Array.isArray( games ) ? games.length : 0 } 
                paginate={ paginate } 
                currentPage={ currentPage }
                setCurrentPage={ setCurrentPage }
            />
        </div>
    )
}

export default Searchbar