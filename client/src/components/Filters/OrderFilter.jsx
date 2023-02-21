import React from 'react';
import { filterOrdered, filterRating } from '../../redux/actions';
import { useDispatch } from 'react-redux';

function OrderFilter({ setCurrentPage }) {
    const dispatch = useDispatch();

    const handleSelect = ( evento ) => {
        const value = evento.target.value;
        setCurrentPage( 1 );
        value === "asc" || value === "desc"  ? dispatch( filterOrdered( value )) 
        : dispatch( filterRating( value ));
    }

    return (
        <div id="orderFilter">
            <select className='orderFilterList' onChange={ handleSelect } defaultValue={'DEFAULT'} >
                <option value="DEFAULT" disabled> Order by: </option>
                <option value="DEFAULT" disabled> Name </option>
                <option value="asc"> Ascendant </option>
                <option value="desc"> Desendent </option>
                <option value="DEFAULT" disabled> Rating </option>
                <option value="rAsc"> Higher to lower </option>
                <option value="rDesc"> Rating Lower to higher </option>
            </select>
        </div>
    )
}

export default OrderFilter;