import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Images/Logo.png'
import add from '../../Images/icons/crear.png'
import './Nav.css'

function Nav() {
    const [ name, setName ] = useState("");
    const handleChange = () => {
        document.getElementById("search").value = ""
    } 
    function enter (e) {
        if(e.keyCode === 13){
            document.getElementById("myBtn").click();
        }
    }

    return ( 
        <nav id="Nav">
            <Link to={ '/' }>
                <section className='navLogo'>
                    <img src={ logo } className='navLogoImg' alt="Logo" />
                    <p className='navTitle'> Henry Games </p>
                </section>
            </Link>
            <div className="searchbar">
                <input
                    id='search'
                    onChange={( event ) => setName( event.target.value )}
                    placeholder="Search videogame..."
                    type="text"
                    onKeyUp={ enter }
                />
                <button className={name.length > 0 ? "cleaner active" : "cleaner"} onClick={ handleChange } > X </button>
                <Link to={`/games/${name}`}>
                    <button id='myBtn' name="name" type="submit" onClick={ handleChange }> Go! </button>
                </Link>
            </div>
            <Link to={ '/creategame' }>
                <section className='CreateGame'>
                    <img src={add} alt="Icon for add game" />
                    <div className="createGame">Add Game</div>
                </section>
            </Link>
        </nav>
    )
}

export default Nav