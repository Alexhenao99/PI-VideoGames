import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getGames } from '../../redux/actions';
import Pagination from '../Pagination/Pagination';
import Card from './Card/Card';
// import Loader from '../Loader/Loader';
import './Cards.css';


function Cards({currentPage, setCurrentPage, gamesPerPage, indexOfFirstGame, indexOfLastGame}) {
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
                <Card 
                    games = { game }
                    key = { game.id }
                /> 
            ))
        );
    };
    
    //  Renderiza 
    return(
        <div className='Cards_component'>
            <div className='Cards'>
                {/*games.length !== 0 ?*/ cards() /*: <Loader />*/}
            </div>
            <Pagination 
                gamesPerPage={gamesPerPage} 
                totalPosts={games.length} 
                paginate={paginate} 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default Cards;