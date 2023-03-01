import React from 'react';
import { filterOrdered, filterRating } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import './Css/Filter.css'

function OrderFilter({ setCurrentPage }) {
    const dispatch = useDispatch();

    const handleSelect = ( evento ) => {
        const value = evento.target.value;
        setCurrentPage( 1 );
        value === "asc" || value === "desc"  ? dispatch( filterOrdered( value )) 
        : dispatch( filterRating( value ));
    }

    return (
        <form className="orderFilter">
            <select className='orderFilterList' onChange={ handleSelect } defaultValue={'DEFAULT'} >
                <option className='orderOptionsD' value="DEFAULT" disabled> Order by: </option>
                <option className='orderOptionsD' value="DEFAULT" disabled> Name </option>
                <option className='orderOptions' value="asc"> Ascendant </option>
                <option className='orderOptions' value="desc"> Desendent </option>
                <option className='orderOptionsD' value="DEFAULT" disabled> Rating </option>
                <option className='orderOptions' value="rAsc"> Higher to lower </option>
                <option className='orderOptions' value="rDesc"> Rating Lower to higher </option>
            </select>
            <button className='btnReset' type='reset' > X </button>
        </form>
    )
}

export default OrderFilter;