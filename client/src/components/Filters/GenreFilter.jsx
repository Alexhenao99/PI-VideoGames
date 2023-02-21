import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGenres, filterGenre } from '../../redux/actions'

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
        <div id="genreFilter">
            <select onChange={ handleSelect } defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled> Genre </option>
                <option value="All"> All Genres </option>
                {
                    genres.map(( genre, i ) => {
                        return(
                            <option value={ genre.name } key={ i } > { genre.name } </option>
                        )
                    })    
                }
            </select>
        </div>
    )
}

export default GenreFilter