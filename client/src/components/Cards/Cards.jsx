import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { getGames } from '../../redux/actions';
import Pagination from '../Pagination/Pagination';
import Card from './Card/Card';
// import Loader from '../Loader/Loader';
import './Cards.css';

function Cards({ currentPage, setCurrentPage, gamesPerPage, indexOfFirstGame, indexOfLastGame }) {
    const dispatch = useDispatch();
    
    // Ejecuta getgames para traer los datos y guardarlos en el estado games
    const games = useSelector(state => state.games);
    
    useEffect( () => {
        dispatch( getGames() );
    }, [ dispatch ]);
    
    // //                  Paginado
    // Devuelve una copia de una parte de los datos guardados en el estado
    const currentGame = games.slice( indexOfFirstGame, indexOfLastGame );
    
    const paginate = ( page ) => {
        setCurrentPage( page );
    };
    
    // Cards
    const cards = () => {
        return (
            currentGame.map( ( game, i ) => (
                <Link to={ `/detail/${ game.id }` } key={ i } className="linkDetails">
                    <Card 
                        games = { game }
                    /> 
                </Link>
            ))
        );
    };
    
    //  Renderiza 
    return(
        <div className='Cards_component'>
            <div className='Cards'>
                { 
                    games.includes( 'Not found' ) 
                        ? <div className="notFoundGames"> { games } </div> 
                        : /*games.length !== 0 ?*/ cards() /*: <Loader />*/
                }
            </div>
            <Pagination 
                gamesPerPage={ gamesPerPage } 
                totalPosts={ Array.isArray( games ) ? games.length : 0 } 
                paginate={ paginate } 
                currentPage={ currentPage }
                setCurrentPage={ setCurrentPage }
            />
        </div>
    );
};

export default Cards;