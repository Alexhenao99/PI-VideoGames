import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Images/Logo.png'

function Nav() {
    const [ name, setName ] = useState("");
    const resetValueSearch = () => {
        document.getElementById("search").value = ""
    };
    return (
        <nav id="Nav">
            <Link to={ '/home' }>
                <section className='logo'>
                    <img src={ logo } className='logo' alt="Logo" />
                    <p> Henry Games </p>
                </section>
            </Link>
            <div className="searchbar">
                <input
                    id='search'
                    onChange={( event ) => setName( event.target.value )}
                    placeholder="Search videogame..."
                    type="text"
                />
                <Link to={`/games/${name}`}>
                    <button name="name" type="submit" onClick={ resetValueSearch }> Go! </button>
                </Link>
            </div>
            <Link to={ '/creategame' }>
                <div className="creategame">Add Game</div>
            </Link>
        </nav>
    )
}

export default Nav