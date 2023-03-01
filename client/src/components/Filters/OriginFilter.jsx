import React from 'react'
import { filterCreated } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import './Css/Filter.css'

function CreatedFilter({ setCurrentPage }) {
    const dispatch = useDispatch();

    const handleSelect = ( evento ) => {
        const value = evento.target.value;
        setCurrentPage( 1 );
        dispatch( filterCreated( value ))
    }
    return (
        <form className='CreatedFilters'>
            <select className='createdFiltersList' onChange={ handleSelect } defaultValue={'DEFAULT'}>
                <option className='origionOptionsD' value="DEFAULT" disabled> Origin </option>
                <option className='origionOptions' value="Api"> API </option>
                <option className='origionOptions' value="created"> Database </option>
            </select>
            <button className='btnReset' type='reset' onClick={ handleSelect } value="All"> X </button>
        </form>
    )
}

export default CreatedFilter