import React from 'react'
import { filterPlatform } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import './Css/Filter.css'

function PlatformFilter({ setCurrentPage }) {
    const dispatch = useDispatch();
    
    const handleSelect =  ( evento ) => {
        const value = evento.target.value;
        setCurrentPage( 1 );
        dispatch( filterPlatform( value ));
    };
    
    return (
        <form id="platformFilter">
            <select className='platformFilterList' onChange={ handleSelect } defaultValue={'DEFAULT'}>
                <option className='platformOptionsD' value="DEFAULT" disabled> Platform </option>
                <option className='platformOptions' value="xbox"> Xbox </option>
                <option className='platformOptions' value="android"> Android </option>
                <option className='platformOptions' value="playstation"> Playstation </option>
                <option className='platformOptions' value="pc"> Pc </option>
                <option className='platformOptions' value="nintendo"> Nintendo </option>
            </select>
            <button className='btnReset' type='reset' onClick={ handleSelect } value="All"> X </button>
        </form>
    )
}

export default PlatformFilter