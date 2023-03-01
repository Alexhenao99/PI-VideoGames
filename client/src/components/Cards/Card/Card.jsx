import React from 'react';
import { Link } from 'react-router-dom';
import { platforms } from '../../Utils/Platforms';
import './Card.css';

function Card({ games }) {
    const { id, name, image, rating, parent_platforms, genres } = games;
    
    return(
        <div id='card'>
            <Link to={ `/detail/${ id }` } className="linkDetails">
                <div className='imgCard'>
                    <img className='img' src={ image } alt={ name } />
                </div>
            </Link>
            <div className='cardInfo'>
                <section className='cardClose'>
                    <button value={Math.round(rating)} className='rating'> { rating } </button>
                    <section className='platform'>
                        { platforms( parent_platforms ) }
                    </section>
                        <h1 className='name'> { name } </h1>
                </section>
                <section className='cardOpen'>
                    <p className='cardGenres'> 
                        { genres.map(genre => genre.name).join(', ') } 
                    </p>
                </section>
            </div>
        </div>
    )
}

export default Card;