import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGenres, filterGenre } from '../../redux/actions'
import './Css/Filter.css'

function GenreFilter({ setCurrentPage }) {
    const dispatch = useDispatch();
    const genres = useSelector( state => state.genresFilter )
    
    useEffect(() => {
        dispatch( getGenres() )
    },[ dispatch ]);
    
    const handleSelect =  ( evento ) => {
        const value = evento.target.value;
        setCurrentPage( 1 );
        dispatch( filterGenre( value ));
    };
    
    return (
        <form id="genreFilter">
            <select className='genreFilters' onChange={ handleSelect } defaultValue={'DEFAULT'}>
                <option className='genreOptions' value="DEFAULT" disabled> Genre </option>
                {
                    genres.map(( genre, i ) => {
                        return(
                            <option className='genreOptions' value={ genre.name } key={ i } > { genre.name } </option>
                        )
                    })    
                }
            </select>
            <button className='btnReset' type='reset' onClick={ handleSelect } value="All"> X </button>
        </form>
    )
}

export default GenreFilter