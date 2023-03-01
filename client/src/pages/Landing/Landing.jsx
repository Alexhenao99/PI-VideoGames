import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Images/Logo.png'
import './Landing.css'
import name from '../../Images/icons/byName.png'
import gender from '../../Images/icons/Genres.png'
import platform from '../../Images/icons/plataformas.png'
import edit from '../../Images/icons/edit.png'
import deleteT from '../../Images/icons/delete.png'

const Landing = () => {
    return (
        <div id="landing">
            <section className='info'>
                <div className='logo'>
                    <img className='logoImg' src={ logo } alt="Logo" />
                    <h1 className='logoTitle'> Henry Games </h1>
                </div>
                <div className='description' >
                    <p className='desciption1'> Looking for information about your favorite games? You've come to the right place! </p>
                    <section className='infoList'> 
                        Search and filter
                        <section className='info2List'>
                            <div className='infoCard'>
                                <img className='icons' src={name} alt="Icon name" />  
                                <p> By name </p>
                            </div>
                            <div className='infoCard'>
                                <img className='icons' src={gender} alt="Icon gender" />  
                                <p> By gender </p>
                            </div>
                            <div className='infoCard'>
                                <img className='icons' src={platform} alt="Icon platform" /> 
                                <p> By platform  </p>
                            </div>
                        </section>
                    </section>
                    <section className='infoList'> 
                        Add games 
                        <section className='info2List'>
                            <div className='infoCard'>
                                <img className='icons' src={edit} alt="Icon edit" /> 
                                <p> Edit them </p>
                            </div>
                            <div className='infoCard'>
                                <img className='icons' src={deleteT} alt="Icon delete" /> 
                                <p> Delete them </p>
                            </div>
                        </section>
                    </section>
                </div>
            </section>
            <section className='img_btn' >
                <img className='imgLanding' src="https://i.pinimg.com/originals/d0/e0/e2/d0e0e259bf0aba4da742bedff1d4b8a5.gif" alt="Kids playing" />
                <Link to={'/home'}> 
                    <button className='btnLanding' > Search Games </button>
                </Link>
            </section>
        </div>
    )
}

export default Landing