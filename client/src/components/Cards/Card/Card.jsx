import React from 'react';
import { Link } from 'react-router-dom';
import { platforms } from '../../Utils/Platforms';
import './Card.css';

function Card({ games }) {
    const { id, name, image, rating, parent_platforms, genres } = games;
    
    return(
        <div className='card'>
            <div className='imgCard'>
                <img className='img' src={ image } alt={ name } />
            </div>
            <div className='cardInfo'>
                <section className='cardClose'>
                    <section className='platform'>
                        { platforms( parent_platforms ) }
                    </section>
                    <Link to={ `/detail/${ id }` } className="linkDetails">
                        <h1 className='name'> { name } </h1>
                    </Link>
                    <h1 className='rating'> { rating } </h1>
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