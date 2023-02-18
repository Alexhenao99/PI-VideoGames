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
            {/* <section className='Filters'>
                <select name="geners_option_list" id="geners_option_list">
                    <option value="all"> Genres </option>
                </select>
                <select name="platforms_option_list" id="platforms_option_list">
                    <option value="all"> Platforms </option>
                    <option value="xbox"> Xbox </option>
                    <option value="playstation"> PlayStation </option>
                    <option value="android"> Android </option>
                    <option value="nintendo"> Nintendo </option>
                </select>
                <select name="filters_option_list" id="filters_option_list">
                    <option value="all"> Order By: </option>
                    <option value="asc"> A - Z </option>
                    <option value="desc"> Z - A </option>
                    <option value="nintendo"> Nintendo </option>
                </select>
                <select name="origin_option_list" id="origin_option_list">
                    <option value="all"> Origin </option>
                    <option value="api"> Api </option>
                    <option value="Basedata"> By Users </option>
                </select>
            </section> */}
            <div className='div_filtro_ordernamineto'>
                <Filter currentPage={ currentPage } setCurrentPage={ setCurrentPage } />
                <div className='div_ordernamiento'>
                    {/* <span className='ordenar_text'>Ordernar por :</span>
                    <select className='select_ordernamiento' onChange={handleChange}>
                        <option className='option_name' value="name_asc">Nombre (asc)</option>
                        <option className='option_name' value="name_des">Nombre (des)</option>
                        <option className='option_name' value="peso_asc">Peso (asc)</option>
                        <option className='option_name' value="peso_des">Peso (des)</option>
                    </select> */}
                </div>
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