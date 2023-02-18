import React from 'react'
import CreatedFilter from "./CreatedFilters";
// import 'Filter.css'

function Filter({ currentPage, setCurrentPage }) {
    return (
        <div id="Filtro">
                <div className="Filtros">
                    <div className="createdFilter">
                        <CreatedFilter currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </div>
                    {/* <div className="div_fil">
                        <span className="filtro_name">Temperamentos</span>
                        <FiltroTemperamento currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </div> */}
                </div>
        </div>
    )
}

export default Filter
