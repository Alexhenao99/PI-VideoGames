import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createGame, getGenres } from '../../redux/actions';

// Images
import xbox from '../../Images/Platforms/xbox.png';
import playstation from '../../Images/Platforms/playstation.png';
import nintendo from '../../Images/Platforms/nintendo.png';
import pc from '../../Images/Platforms/pc.png';
import android from '../../Images/Platforms/android.png';

const CreateGame = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getGenres() );
    },[ dispatch ]);

    //              Estados
    const [ newGame, setNewGame ] = useState({
        name: "",
        description: "",
        parent_platforms: [],
        image: "https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2021/04/juegos-gratis-fin-semana-2309435.jpg",
        releaseDate: "",
        rating: 0,
        genres: []
    });
    const [ platformsOptions ] = useState([
        "Android", 
        "Nintendo", 
        "Pc", 
        "PlayStation", 
        "Xbox"
    ]);
    const [ platformSelect, setPlatformSelect ] = useState([]);
    const genres = useSelector( state => state.genresFilter );
    const [ genreSelect, setGenreSelect ] = useState([])
    
    //                  Handlers
    // Guarda los cambios en los estados
    const handleChange = ( event ) => {
        const value = event.target.value;
        const inputName = event.target.name;
        
        // Guarda los datos en las propiedades correspondientes
        setNewGame({
            ...newGame,
            [inputName]: Number(value) ? Number(value) : value,
        });
    };

    // Envia los datos al reducer
    const handleSubmit = ( event ) => {
        event.preventDefault();
        dispatch( createGame(newGame) )
    };

    //  Guarda y actualiza los estados segun las opciones
    // Plataformas
    const handlePlatformSelect = ( event ) => {
        const platform = event.target.value
        
        // Si la plataforma ya esta guardada en el estado newGame terminara la ejecucion
        if( newGame.parent_platforms.includes( platform )) return;
        
        // Guarda la plataforma en el estado newGame y en setPlatformSelect
        setNewGame({
            ...newGame,
            parent_platforms: [...newGame.parent_platforms, platform]
        });
        setPlatformSelect([ ...platformSelect, platform  ]);
    };
    const handlePlatformDelete = ( evento ) => {
        const value = evento.target.value;
        setNewGame({ ...newGame, parent_platforms: newGame.parent_platforms.filter( platform => platform !== value )})
        setPlatformSelect( platformSelect.filter( platform => platform !== value ));
    };

    // Generos
    const handleGenreSelect = ( event ) => {
        const genre = event.target.value
        if( newGame.parent_platforms.includes( genre )) return;
        setNewGame({
            ...newGame,
            genres: [ ...newGame.genres, genres.find( genreDb => genreDb.name === genre).id ]
        });
        setGenreSelect([ ...genreSelect, genre ]);
    };
    const handleGenreDelete = ( evento ) => {
        const value = evento.target.value;
        const idValue = genres.find( genreDb => genreDb.name === value).id;
        setNewGame({ ...newGame, genres: newGame.genres.filter( genre => genre !== idValue )})
        setGenreSelect( genreSelect.filter( platform => platform !== value ));
    };
    
    // funcion para mostrar los logos
    const platforms = ( platforms ) => {
        return(
            // eslint-disable-next-line array-callback-return
            platforms.map( ( platform, i ) => {
                switch (platform) {
                    case 'Xbox':
                        return <img className='logoPlatform' src={ xbox } alt="Logo Xbox" key={ i }/>
                    case 'PlayStation':
                        return <img className='logoPlatform' src={ playstation } alt="Logo Playstation" key={ i }/>
                    case 'Nintendo':
                        return <img className='logoPlatform' src={ nintendo } alt="Logo Nintendo" key={ i }/>
                    case 'Pc':
                        return <img className='logoPlatform' src={ pc } alt="Logo Pc" key={ i }/>
                    case 'Android':
                        return <img className='logoPlatform' src={ android } alt="Logo Android" key={ i }/>
                    default:
                    break;
                }
            })
        )
    }
    
    return (
        <div id="CreateGame">
            {/* Form Create */}
            <div className="createGameContainer">
                <h1> Agega un nuevo juego </h1>
                <p> Los datos con * son obligatorios </p>
                <form className='form' action="" onSubmit={ handleSubmit } >
                    
                    {/* Name */}
                    <div className="inputName">
                        <label htmlFor="name"> Name * </label>
                        <input type="text" className='input' name='name' onChange={ handleChange } />
                    </div>
                    
                    {/* Image */}
                    <div className="inputImage">
                        <label htmlFor="image"> Image </label>
                        <input type="url" id='img' className="input" name='image' onChange={ handleChange } />
                    </div>
                    
                    {/* Description */}
                    <div className="description">
                        <label htmlFor="description"> Description * </label>
                        <textarea name="description"  className='input' onChange={ handleChange } cols="30" rows="10"></textarea>
                    </div>
                    
                    {/* ReleaseDate */}
                    <div className="releaseDate">
                        <label htmlFor="releaseDate"> Release Date </label>
                        <input type="date" name="releaseDate" id="" className="input" onChange={ handleChange } />
                    </div>
                    
                    {/* Rating */}
                    <div className="rating">
                        <label htmlFor="rating"> Rating </label>
                        <input type="text" className="input" name='rating' onChange={ handleChange } />
                    </div>
                    
                    {/* Platforms */}
                    <div className="parent_platforms">
                        <div className="platformList">
                            <label> Platforms * </label>
                            <select className='selectOptions' name="platforms" onChange={ handlePlatformSelect } defaultValue={'DEFAULT'}>
                            <option value="DEFAULT" disabled> None </option>
                            {
                                platformsOptions.map((platform, i) => {
                                    return(
                                        <option className='platformOption' key={ i } value={ platform }> { platform } </option>
                                    )
                                })
                            }
                            </select>
                        </div>
                        <div className='platformTags'>
                            <ul className='TagsList'>
                            {
                                platformSelect.map(( platform, i ) => {
                                    return(
                                        <li className='li_temp' key={i}>
                                            { platform }
                                            <button className='btnDelete' type='button' value={ platform } onClick={ handlePlatformDelete }> x </button>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        </div>
                    </div>
                    
                    {/* Genres */}
                    <div className="genres">
                        <div className="genresList">
                            <label> Genres * </label>
                            <select className='selectOptions' name="platforms" onChange={ handleGenreSelect } defaultValue={'DEFAULT'}>
                            <option value="DEFAULT" disabled> None </option>
                            {
                                genres.map((genre, i) => {
                                    return(
                                        <option className='genreOption' key={ i } value={ genre.name }> { genre.name } </option>
                                    )
                                })
                            }
                            </select>
                        </div>
                        <div className='GenresTags'>
                            <ul className='TagsList'>
                            {
                                genreSelect.map(( platform, i ) => {
                                    return(
                                        <li className='li_temp' key={i}>
                                            { platform }
                                            <button className='btnDelete' type='button' value={ platform } onClick={ handleGenreDelete }> x </button>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        </div>
                    </div>
                    <input type="submit" value="Create" />
                </form>
                {/* Preview */}
                <div className="preview">
                    <div className='imgCard'>
                        <img className='imgPreview' src={ newGame.image } alt='Game' />
                    </div>
                    <div className='cardInfo'>
                        <section className='cardClose'>
                            <section className='platform'>
                                { platforms( newGame.parent_platforms ) }
                            </section>
                            <h1 className='name'> { newGame.name } </h1>
                            <h1 className='rating'> { newGame.rating } </h1>
                        </section>
                        {/* <section className='cardOpen'>
                            <p className='cardGenres'> 
                                { genres.map(genre => genre.name).join(', ') } 
                            </p>
                        </section> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateGame   