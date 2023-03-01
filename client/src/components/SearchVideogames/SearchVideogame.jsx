import React from 'react'
import Card from '../Cards/Card/Card'
import Loader from '../../pages/Loader/Loader'
import './SearchVideogame.css'

const SearchVideogame = ({ videogames }) => {

    return (
        <div id="searchVideogame">
            {
                videogames.length > 0 
                    ? videogames.map( ( game, i ) => ( 
                            <Card games={ game } key={ i }/> 
                    ))
                    : <Loader/>
            }
        </div>
    )
}

export default SearchVideogame