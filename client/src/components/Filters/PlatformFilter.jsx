import React from 'react'
import { filterPlatform } from '../../redux/actions'
import { useDispatch } from 'react-redux'

function PlatformFilter({ setCurrentPage }) {
    const dispatch = useDispatch();
    
    const handleSelect =  ( evento ) => {
        const value = evento.target.value;
        setCurrentPage( 1 );
        dispatch( filterPlatform( value ));
    };
    
    return (
        <div id="platformFilter">
            <select onChange={ handleSelect } defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled> Platform </option>
                <option value="xbox"> Xbox </option>
                <option value="android"> Android </option>
                <option value="playstation"> Playstation </option>
                <option value="pc"> Pc </option>
                <option value="nintendo"> Nintendo </option>
            </select>
        </div>
    )
}

export default PlatformFilter