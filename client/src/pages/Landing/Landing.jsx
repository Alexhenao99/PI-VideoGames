import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Images/Logo.png'

const Landing = () => {
    return (
        <div className="landing">
            <section className='info'>
                <img className='logo' src={ logo } alt="Logo" />
                <h1 className='name'> Henry Games </h1>
                <ul className='description' >
                    <p> Looking for information about your favorite games? You've come to the right place! </p>
                    <li> Busca y filtra
                        <ul>
                            <li> Por nombre </li>
                            <li> Por genero </li>
                            <li> plataforma </li>
                        </ul>
                    </li>
                    <li> Agrega </li>
                    <li> Edita </li>
                    <li> elimina </li>
                </ul>
            </section>
            <section className='img_btn' >
                <img src="https://www.pandasecurity.com/es/mediacenter/src/uploads/2020/07/pandasecurity-juegos-online.jpg" alt="Kids playing" />
                <Link to={'/home'}> 
                    <button className='btn' > All Games </button>
                </Link>
            </section>
        </div>
    )
}

export default Landing