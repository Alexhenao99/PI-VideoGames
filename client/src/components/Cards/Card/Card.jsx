import React from 'react';
import xbox from '../../../Images/Platforms/xbox.png';
import playstation from '../../../Images/Platforms/playstation.png';
import nintendo from '../../../Images/Platforms/nintendo.png';
import pc from '../../../Images/Platforms/pc.png';
import android from '../../../Images/Platforms/android.png';

import './Card.css';

function Card({ games }) {
    const {name, image, parent_platforms, genres, releaseDate, rating} = games;
    
    const platforms = ( platforms ) => {
        return(
            platforms.map( ( platform ) => {
                switch (platform.toLowerCase()) {
                    case 'xbox':
                        return <img src={xbox} alt="Logo Xbox" />
                    case 'playstation':
                        return <img src={ playstation } alt="Logo Playstation" />
                    case 'nintendo':
                        return <img src={ nintendo } alt="Logo Nintendo" />
                    case 'pc':
                        return <img src={ pc } alt="Logo Pc" />
                    case 'android':
                        return <img src={ android } alt="Logo Android" />
                    default:
                    break;
                }
            })
        )
    }
    
    return(
        <div id='card'>
            <div className='imgCard'>
                <img className='img' src={ image } alt={ name } />
            </div>
            <div className='cardInfo'>
                <section className='cardClose'>
                    <section className='platform'>
                        {platforms(parent_platforms)}
                    </section>
                    <h1 className='name'> { name } </h1>
                    <h2 className='rating'> { rating } </h2>
                </section>
                <section className='cardOpen'>
                    <p className='relaseDate'> { releaseDate } </p>
                    <p className='cardGenres'> { genres.map(genre => genre.name).join(', ') } </p>
                </section>
            </div>
        </div>
    )
}

export default Card;