import React, { useState } from 'react'
import Cards from '../../components/Cards/Cards'
import Filter from '../../components/Filters/Filter'
import './Home.css'

const Home = () => {
    //                  Paginado
    //  Estados
    const [ currentPage, setCurrentPage ] = useState( 1 );
    const [ gamesPerPage ] = useState( 15 );
    
    // Index del ultimo juego que se ve en la pagina → pag1 => 15 || pag2 => 30
    const indexOfLastGame = currentPage * gamesPerPage;
    
    // Index del primer juego que se ve en la pagina → pag1 => 0 || pag2 => 15
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    
    return (
        <div id="home">
            <div className='div_filtro_ordernamineto'>
                <Filter currentPage={ currentPage } setCurrentPage={ setCurrentPage } />
            </div>
            <section className='cards'>
                <Cards
                    currentPage={ currentPage } 
                    setCurrentPage={ setCurrentPage } 
                    gamesPerPage={ gamesPerPage } 
                    indexOfFirstGame={ indexOfFirstGame } 
                    indexOfLastGame={ indexOfLastGame }       
                />
            </section>
        </div>
    )
}

export default Home