import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { deleteGame, getDetails } from '../../redux/actions';
import { Link } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    // eslint-disable-next-line eqeqeq
    const detail = useSelector( state => state.detailGame.id == id ? state.detailGame : [] );
    
    useEffect( () => {
        dispatch( getDetails( id ))
    },[ dispatch, id ])   

    function description() {
        console.log(detail);
        if(detail.length !== 0 ) document.getElementById("description").innerHTML = detail.description.replaceAll("\n", "<br>")
    }
    
    const platforms = ( platforms ) => {
        if( platforms ) return platforms.join(", ")
    }
    
    const genres = ( genres ) => {
        if( genres ) return Object.values( genres.map( genre => genre.name ).join(", "))
    }
    
    
    function handlerDelete() {
        if( window.confirm("Are your sure?") === true ) {
            dispatch( deleteGame( id ) )
            alert( "The game has been eliminated" )
            window.location.href="/home"
        }
    };
    
    return (
        <div id="details">
            { 
                detail.length === 0 ? 
                    <Link to={ "/home" }> <div className="notFound"> Game Not Found </div> </Link> 
                        : detail.created === true ? 
                            <div className="buttons">
                                <Link className='btns' to={`/updategame/${ id }`}>
                                    <button> Edit </button>
                                </Link>
                                <button className='btns' onClick={ handlerDelete } > Delete </button>
                            </div>  
                            : <p style={{display:'none'}}/> 
            }
            <img src={ detail.image } alt={detail.name} style={{width:"500px"}} />
            <h1 className="name"> {detail.name} </h1>
            <div id="description">{description()}</div>
            <h1 className="name"> { platforms( detail.parent_platforms ) } </h1>
            <h1 className="name"> { detail.releaseDate } </h1>
            <h1 className="name"> { detail.rating } </h1>
            <h1 className="name"> { genres( detail.genres) } </h1>
        </div>
    )
}

export default Detail