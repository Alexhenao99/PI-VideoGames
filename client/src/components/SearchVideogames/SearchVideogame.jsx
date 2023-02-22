import React from 'react'
import Card from '../Cards/Card/Card'
import Loader from '../../pages/Loader/Loader'
import { Link } from 'react-router-dom'

const SearchVideogame = ({ videogames }) => {

    return (
        <div id="searchVideogame">
            {
                videogames.length > 0 
                    ? videogames.map( ( game, i ) => ( 
                        <Link to={ `/detail/${ game.id }` } key={ i } className="linkDetails">
                            <Card games={ game } key={ i }/> 
                        </Link>
                    ))
                    : <Loader/>
            }
        </div>
    )
}

export default SearchVideogame