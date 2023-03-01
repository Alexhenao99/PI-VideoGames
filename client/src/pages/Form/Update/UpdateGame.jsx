import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { platforms } from '../../../components/Utils/Platforms';
import { getDetails, getGenres, updateGames } from '../../../redux/actions';
import { Link } from 'react-router-dom';
import '../CreateGame.css'

const UpdateGame = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch( getGenres() );
        dispatch( getDetails( id ) );
    },[ dispatch, id ]);
    
    // Estados
    const detail = useSelector(  state => state.detailGame  );
    const genres = useSelector( state => state.genresFilter );
    const [ updateGame, setUpdateGame ] = useState({
        name: detail.name,
        description: detail.description,
        parent_platforms: detail.parent_platforms,
        image: detail.image,
        releaseDate: detail.releaseDate,
        rating: detail.rating,
        genres: detail.genres.map(genre => genre.id)
    });
    const [ platformsOptions ] = useState([
        "Android", 
        "Nintendo", 
        "Pc", 
        "PlayStation", 
        "Xbox"
    ]);
    const [ platformSelect, setPlatformSelect ] = useState( detail.parent_platforms );
    const [ genreSelect, setGenreSelect ] = useState( detail.genres.map(genre => genre.name));
    
    //                  Handlers
    // Guarda los cambios en los estados
    const handleChange = ( event ) => {
        const value = event.target.value;
        const inputName = event.target.name;
        
        // Guarda los datos en las propiedades correspondientes
        setUpdateGame({
            ...updateGame,
            [inputName]: Number(value) ? Number(value) : value,
        });
    };
    
    // Envia los datos al reducer
    const handleSubmit = ( event ) => {
        event.preventDefault();
        if( window.confirm("Are you sure?") === true ) {
            dispatch( updateGames( id, updateGame ))
        }
    };
    
    //  Guarda y actualiza los estados segun las opciones
    // Plataformas
    const handlePlatformSelect = ( event ) => {
        const platform = event.target.value
        
        // Si la plataforma ya esta guardada en el estado updateGame o si esta vacio y terminara la ejecucion
        if( updateGame.parent_platforms.includes( platform )) return;
        if(platform === "" ) return;
        
        // Guarda la plataforma en el estado UpdateGame y en setPlatformSelect
        setUpdateGame({
            ...updateGame,
            parent_platforms: [...updateGame.parent_platforms, platform]
        });
        setPlatformSelect([ ...platformSelect, platform  ]);
    };
    const handlePlatformDelete = ( evento ) => {
        const value = evento.target.value;
        setUpdateGame({ ...updateGame, parent_platforms: updateGame.parent_platforms.filter( platform => platform !== value )})
        setPlatformSelect( platformSelect.filter( platform => platform !== value ));
    };
    
    // Generos
    const handleGenreSelect = ( event ) => {
        const genre = event.target.value
        if( updateGame.parent_platforms.includes( genre )) return;
        if( genre === "" ) return;
        setUpdateGame({
            ...updateGame,
            genres: [ ...updateGame.genres, genres.find( genreDb => genreDb.name === genre).id ]
        });
        setGenreSelect([ ...genreSelect, genre ]);
    };
    const handleGenreDelete = ( evento ) => {
        const value = evento.target.value;
        const idValue = genres.find( genreDb => genreDb.name === value).id;
        setUpdateGame({ ...updateGame, genres: updateGame.genres.filter( genre => genre !== idValue )})
        setGenreSelect( genreSelect.filter( platform => platform !== value ));
    };

    return (
        <div className="updateGame">
            <div className='titleCG'>
                <Link to={'/home'}>
                    <button id='btnHomeCG' className='goHome'> Go Home </button>
                </Link>
                <h1 className='tituloCG'> Update the game </h1>
            </div>
            <div id='CreateGame' >
                {/* Form Create */}
                <div className="createGameContainer">
                    <form className='form' action="" onSubmit={ handleSubmit } >
                        {/* Name */}
                        <div className="sectionInputCG">
                            <label className='label' htmlFor="name"> Name </label>
                            <input type="text" className='input' name='name' onChange={ handleChange } required  autoComplete='off' defaultValue={ detail.name } />
                        </div>
                        
                        {/* Image */}
                        <div className="sectionInputCG">
                            <label className='label' htmlFor="image"> Image </label>
                            <input type="url" id='img' className="input" name='image' onChange={ handleChange }  autoComplete='off' defaultValue={ detail.image }/>
                        </div>
                        
                        {/* Description */}
                        <div className="sectionInputCG">
                            <label className='label' htmlFor="description"> Description </label>
                            <textarea name="description" id='descriptionCG'  className='input' onChange={ handleChange } cols="30" rows="10" required  autoComplete='off' defaultValue={ detail.description } ></textarea>
                        </div>
                        
                        {/* ReleaseDate */}
                        <div className="sectionInputCG">
                            <label className='label' htmlFor="releaseDate"> Release Date </label>
                            <input type="date" name="releaseDate" id="" className="input" onChange={ handleChange } required autoComplete='off' defaultValue={ detail.releaseDate }/>
                        </div>
                        
                        {/* Rating */}
                        <div className="sectionInputCG">
                            <label className='label' htmlFor="rating"> Rating * </label>
                            <input type="number" step="any" min={0} max={5} className="input" id='inputRating' name='rating' onChange={ handleChange } required autoComplete='off' defaultValue={ detail.rating}/>
                        </div>
                        
                        {/* Platforms */}
                        <div className="parent_platforms">
                            <div className="sectionInputCG">
                                <label className='label' > Platforms </label>
                                <select className='selectOptions' name="platforms" onChange={ handlePlatformSelect } >
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
                                                <button className='btnDelete' type='button' value={ platform } onClick={ handlePlatformDelete }> x </button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        
                        {/* Genres */}
                        <div className="genresList">
                            <div className="sectionInputCG">
                                <label className='label'> Genres </label>
                                <select className='selectOptions' name="platforms" onChange={ handleGenreSelect } >
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
                            <button className='createBtn' type="submit"> Update Game </button>
                        </section>
                    </form>
                    <div className="cancelBtn">
                        <a href={`/detail/${id}`}>
                            <button className='createBtn'>Cancel</button>
                        </a> 
                    </div>
                </div>
                {/* Preview */}
                <div className='CardPreview'>
                    <div id='card'>
                        <div className='imgCard'>
                            <img className='img' src={ updateGame.image } alt='Game' />
                        </div>
                        <div className='cardInfo'>
                            <section className='cardClose'>
                                <button className='rating' value={ Math.round(updateGame.rating) } > { updateGame.rating } </button>
                                <section className='platform'>
                                    { platforms( updateGame.parent_platforms ) }
                                </section>
                                <h1 className='name'> { updateGame.name } </h1>
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

export default UpdateGame