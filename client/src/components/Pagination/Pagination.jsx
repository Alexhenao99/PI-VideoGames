import React, {useState} from "react";
import "./Pagination.css";

function Pagination({ gamesPerPage, totalPosts, paginate, currentPage, setCurrentPage }) {
    // Estados
    const [ pageNumberLimit ] = useState(5); // Limite de numeros de paginas 
    const [ maxPageNumberLimit, setMaxPageNumberLimit ] = useState(5); // maximo de numeros de paginas a mostrar
    const [ minPageNumberLimit, setMinPageNumberLimit ] = useState(0); // minimo de numeros de paginas a mostrar
    
    const pageNumbers = [];
    
    // Bucle para calcular y guardar la cantidad de paginas 
    for( let i = 1; i <= Math.ceil( totalPosts / gamesPerPage ); i++) {
        pageNumbers.push(i)
    }
    
    // Handle para aumentar el estado de current page 
    function handleNext() {
        // si current page no es igual al numero total de paginas aumenta
        if( currentPage !== pageNumbers.length ) setCurrentPage( currentPage + 1 )
        
        
        // si al aumentar es mayor al numero max de paginas actualiza los estados para mostrar los valores siguientres de las paginas
        if( currentPage + 1 > maxPageNumberLimit ) {
            setMaxPageNumberLimit( maxPageNumberLimit + pageNumberLimit );
            setMinPageNumberLimit( minPageNumberLimit + pageNumberLimit );
        }
    }
    
    // Handle para disminuir el estado de current page
    function handlePrev() {
        if( currentPage !== 1 ) {
            // si current page no es igual a 1 disminuye
            setCurrentPage( currentPage - 1 )
            
            // si al disminuir, modulo del limite de numero de paginas es igual a 0 actualiza los estados para mostrar los valores anteriores de las paginas
            if(( currentPage - 1 ) % pageNumberLimit === 0 ) {
                setMaxPageNumberLimit( maxPageNumberLimit - pageNumberLimit );
                setMinPageNumberLimit( minPageNumberLimit - pageNumberLimit );
            }
        }
    }
    
    return(
        <div id="pagination">
            <ul className="pagination">
                { pageNumbers.length === 0 ? <p style={{display:"none"}}/> : <button className="page" onClick={ handlePrev }> Prev </button> }
                { 
                    pageNumbers.map(( page, i ) => {
                        if( page < maxPageNumberLimit + 1 && page > minPageNumberLimit ) {
                            return (
                                <li key={ i } className="paginationItem">
                                    <span className={ currentPage === page ? "page active" : "page" } onClick={ () => paginate( page ) } > { page } </span>
                                </li>
                            )
                        } else {
                            return null
                        }
                    })
                }
                { pageNumbers.length === 0 ? <p style={{display:"none"}} /> : <button className="page" onClick={ handleNext }> Next </button> }
            </ul>
        </div>
    )
}

export default Pagination;