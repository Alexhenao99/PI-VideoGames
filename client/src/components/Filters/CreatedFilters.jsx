import React from 'react'
import { filterCreated } from '../../redux/actions'
import { useDispatch } from 'react-redux'

function CreatedFilter({ setCurrentPage }) {
    const dispatch = useDispatch();

    const handleSelect = ( evento ) => {
        const value = evento.target.value;
        setCurrentPage( 1 );
        dispatch( filterCreated( value ))
    }
    return (
        <div id='CreatedFilters'>
            <select onChange={ handleSelect } defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled> Origin </option>
                <option value="All"> All </option>
                <option value="Api"> API </option>
                <option value="created"> Database </option>
            </select>
        </div>
    )
}

export default CreatedFilter