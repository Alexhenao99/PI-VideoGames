import React from 'react';

// Images
import xbox from '../../../Images/Platforms/xbox.png';
import playstation from '../../../Images/Platforms/playstation.png';
import nintendo from '../../../Images/Platforms/nintendo.png';
import pc from '../../../Images/Platforms/pc.png';
import android from '../../../Images/Platforms/android.png';

import './Card.css';
import { Link } from 'react-router-dom';

function Card({ games }) {
    const { id, name, image, rating, parent_platforms, genres } = games;
    
    // muestra el logo de la plataforma
    const platforms = ( platforms ) => {
        return(
            // eslint-disable-next-line array-callback-return
            platforms.map( ( platform, i ) => {
                switch (platform.toLowerCase()) {
                    case 'xbox':
                        return <img className='logoPlatform' src={ xbox } alt="Logo Xbox" key={ i }/>
                    case 'playstation':
                        return <img className='logoPlatform' src={ playstation } alt="Logo Playstation" key={ i }/>
                    case 'nintendo':
                        return <img className='logoPlatform' src={ nintendo } alt="Logo Nintendo" key={ i }/>
                    case 'pc':
                        return <img className='logoPlatform' src={ pc } alt="Logo Pc" key={ i }/>
                    case 'android':
                        return <img className='logoPlatform' src={ android } alt="Logo Android" key={ i }/>
                    default:
                    break;
                }
            })
        )
    }
    
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