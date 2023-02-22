import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getDetails } from '../../redux/actions';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    // eslint-disable-next-line eqeqeq
    const detail = useSelector( state => state.detailGame.id == id ? state.detailGame : [] );
    
    useEffect( () => {
        dispatch( getDetails( id ))
    },[dispatch, id])
    
    function description( about ) {
        return about.includes('<p>') 
        ? document.getElementById("description").innerHTML = about
        : document.getElementById("description").innerHTML = "<p>"+about+"</p>"
    }

    const platforms = ( platforms ) => {
        if( platforms ) return platforms.join(", ")
    }

    const genres = ( genres ) => {
        if( genres ) return Object.values( genres.map( genre => genre.name ).join(", "))
    }
    
    if(detail.length !== 0 && detail.id.toString() === id ) description( detail.description ) 
    
    
    return (
        <div id="details">
            <img src={ detail.image } alt={detail.name} style={{width:"500px"}} />
            <h1 className="name"> {detail.name} </h1>
            <div id="description"></div>
            <h1 className="name"> { platforms( detail.parent_platforms ) } </h1>
            <h1 className="name"> { detail.releaseDate } </h1>
            <h1 className="name"> { detail.rating } </h1>
            <h1 className="name"> { genres( detail.genres) } </h1>
        </div>
    )
}

export default Detail