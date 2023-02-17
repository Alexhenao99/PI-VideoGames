import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from '../../components/Searchbar/Searchbar'
import logo from '../../Images/Logo.png'

function Nav() {
    return (
        <div id="Nav">
            <Link to={ '/home' }>
                <section className='logo'>
                    <img src={ logo } className='logo' alt="Logo" />
                    <p> Henry Games </p>
                </section>
            </Link>
            <Searchbar/>
            <Link to={ '/creategame' }>
                <div className="creategame">Add Game</div>
            </Link>
        </div>
    )
}

export default Nav