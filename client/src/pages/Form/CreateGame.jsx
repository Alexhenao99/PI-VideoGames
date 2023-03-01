import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createGame, getGenres } from '../../redux/actions';
import { platforms } from '../../components/Utils/Platforms';
import { Link } from 'react-router-dom';
import './CreateGame.css'

const CreateGame = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getGenres() );
    },[ dispatch ]);

    //              Estados
    const [ newGame, setNewGame ] = useState({
        name: "Example Game",
        description: "",
        parent_platforms: [],
        image: "https://i0.wp.com/www.marcelopedra.com.ar/blog/wp-content/uploads/2013/10/animated-gifs-of-fighting-game-backgrounds-7.gif?resize=624%2C396&ssl=1",
        releaseDate: "",
        rating: 3.4,
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
    const [ genreSelect, setGenreSelect ] = useState([]);
    
    //                  Handlers
    // Guarda los cambios en los estados
    const handleChange = ( event ) => {
        const value = event.target.value;
        const inputName = event.target.name;
        
        // Guarda los datos en las propiedades correspondientes
        setNewGame({
            ...newGame,
            [inputName]: Number(value) ? Number(value).toFixed(1) : value,
        });
    };

    // Envia los datos al reducer
    const handleSubmit = () => {
            dispatch( createGame(newGame) )
            alert("Game Created")
    };

    //  Guarda y actualiza los estados segun las opciones
    // Plataformas
    const handlePlatformSelect = ( event ) => {
        const platform = event.target.value
        
        // Si la plataforma ya esta guardada en el estado newGame o si esta vacio y terminara la ejecucion
        if( newGame.parent_platforms.includes( platform )) return;
        if(platform === "" ) return;
        
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
        if( genre === "" ) return;
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
    
    return (
        <div className="createGame">
            <div className='titleCG'>
                <Link to={'/home'}>
                    <button id='btnHomeCG' className='goHome'> Go Home </button>
                </Link>
                <h1 className='tituloCG'> Add a new game </h1>
                <p className='subTtituloCG'> Fields marked with * are mandatory </p>
            </div>
            <div id="CreateGame">
                {/* Form Create */}
                <div className="createGameContainer">
                    <form className='form' action="" onSubmit={ handleSubmit } >
                        {/* Name */}
                        <div className="sectionInputCG">
                            <label className='label' htmlFor="name"> Name * </label>
                            <input type="text" className='input' name='name' onChange={ handleChange } required  autoComplete='off' placeholder='Name of the game...'/>
                        </div>
                        
                        {/* Image */}
                        <div className="sectionInputCG">
                            <label className='label' htmlFor="image"> Url Image </label>
                            <input type="url" id='img' className="input" name='image' onChange={ handleChange }  autoComplete='off' placeholder={newGame.image} />
                        </div>
                        
                        {/* Description */}
                        <div className="sectionInputCG">
                            <label className='label' htmlFor="description"> Description * </label>
                            <textarea name="description" id='descriptionCG' minLength="100" maxLength="300"  className='input' onChange={ handleChange } required  autoComplete='off' placeholder='Type the description...' ></textarea>
                        </div>
                        
                        {/* ReleaseDate */}
                        <div className="sectionInputCG">
                            <label className='label' htmlFor="releaseDate"> Release Date * </label>
                            <input type="date" name="releaseDate" id="dateCG" className="input" onChange={ handleChange } required autoComplete='off'/>
                        </div>
                        
                        {/* Rating */}
                        <div className="sectionInputCG">
                            <label className='label' htmlFor="rating"> Rating * </label>
                            <input type="number" step="any" min={0} max={5} className="input" id='inputRating' name='rating' onChange={ handleChange } required autoComplete='off' placeholder='Rate the game from 0 to 5...'/>
                        </div>
                        
                        {/* Platforms */}
                        <div className="platformList">
                            <div className="sectionInputCG">
                                <label className='label' > Platforms * </label>
                                <select className='selectOptions' name="platforms" onChange={ handlePlatformSelect } required >
                                    <option className='optionsAllCGD' value=""> Select </option>
                                        {
                                            platformsOptions.map((platform, i) => {
                                                return(
                                                    <option className='optionsCG' key={ i } value={ platform }> { platform } </option>
                                                )
                                            })
                                        }
                                </select>
                            </div>
                            <div className='tagList'>
                                {
                                    platformSelect.map(( platform, i ) => {
                                        return(
                                            <div className='listCG' key={i}>
                                                { platform }
                                                <button className='btnDelete' type='button' value={ platform } onClick={ handlePlatformDelete }> X </button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        
                        {/* Genres */}
                        <div className="genresList">
                            <div className="sectionInputCG">
                                <label className='label' > Genres * </label>
                                <select className='selectOptions' name="platforms" onChange={ handleGenreSelect } required >
                                    <option className='optionsAllCGD' value=""> Select </option>
                                    {
                                        genres.map((genre, i) => {
                                            return(
                                                <option className='optionsCG' key={ i } value={ genre.name } > { genre.name } </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='tagList'>
                                {
                                    genreSelect.map(( platform, i ) => {
                                        return(
                                            <div className='listCG' key={i}>
                                                { platform }
                                                <button className='btnDelete' type='button' value={ platform } onClick={ handleGenreDelete }> X </button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <section className='ScCg'>
                            <button className='createBtn' type="submit"> Create Game </button>
                        </section>
                    </form>
                </div>
                {/* Preview */}
                <div className='CardPreview'>
                    <div id='card'>
                        <div className='imgCard'>
                            <img className='img' src={ newGame.image } alt='Game' />
                        </div>
                        <div className='cardInfo'>
                            <section className='cardClose'>
                                <button className='rating' value={ Math.round(newGame.rating) } > { newGame.rating } </button>
                                <section className='platform'>
                                    { platforms( newGame.parent_platforms ) }
                                </section>
                                <h1 className='name'> { newGame.name } </h1>
                            </section>
                            <section className='cardOpen'>
                                <p className='cardGenres'> 
                                    { genreSelect.join(", ") } 
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateGame   