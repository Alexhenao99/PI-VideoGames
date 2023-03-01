import React from 'react'
import './Footer.css'
// Images
import github from "../../Images/icons/github.png"
import linkedin from "../../Images/icons/linkedin.png"


const Footer = () => {
    return (
        <footer id='Footer'>
                <ul className="listCredits" >
                        <p className="credits" > Icons: </p>
                        <li className="creditsLink" > <a href="https://www.flaticon.es/autores/iconsbox"> Flaticon </a> </li>
                </ul>
                <p className="copyrigth" > 
                    Made with <img className='heart' src="https://i.pinimg.com/originals/9a/84/c8/9a84c82ffa2654937e8aa8f715450961.gif" alt="Heart gift" />  &copy; William Henao - 2023 
                </p>
                <div className="iconsWebs" >
                    <a href="https://github.com/Alexhenao99" > 
                        <img 
                            src={ github } 
                            alt="Github"
                            class = "contactMe"
                        /> 
                    </a> 
                    <a href="https://www.linkedin.com/in/william-henao-29a2b2251/"> 
                        <img 
                            src={ linkedin } 
                            alt="linkedin"
                            class = "contactMe"
                        /> 
                    </a> 
                </div>
        </footer>
    )
}

export default Footer